import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import styled from 'styled-components'

const ReviewWrap = styled.div`
    .review_box{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0 10px;
    .review_tit{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
    form{
        display: flex;
    }
    input{
        width: calc(80%);
        height: 40px;
        margin-top: 10px;
        outline: none;
        border: 2px dotted steelblue;
        border-radius: 10px;
        padding: 0 10px;
    }
    button{
        width: calc(20% - 10px);
        height: 40px;
        border-radius: 10px;
        border: 1px solid steelblue;
        background-color: transparent;
        margin-left: 10px;
        color: #555;
        margin-top: 10px;
    }
   }
`

export default function Review({id}) {

    const [post, setPost] = useState('') //한줄평 post
    const [loading, setLoading] = useState(false) //loading


    const onChange = (e)=>{
        setPost(e.target.value)
    } //post change event
    
    const onSubmit = async(e)=>{
        e.preventDefault();
        const user = auth.currentUser
        if(!user || loading || post === '' || post.length > 30) return //kill function

        try{
            setLoading(true)
            await addDoc(collection(db,`review-${id}`),{//각각의 아이템의 고유 아이디부여해서 각각을 리뷰할수 있도록 함
                post,
                createdAt : Date.now(),
                username : user.displayName || '사용자',
                userId : user.uid,
            })
            setPost('')

        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }

    }

  return (
    <>

        <ReviewWrap>
        
            <div className="review_box">
                
                <p className='review_tit'>Review</p>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} type="text" placeholder='한줄평을 작성해 주세요! (30글자 이내)' maxLength={30} value={post} required/>
                    <button type='submit'>{loading ? '등록중..' : '등록'}</button>
                </form>
            </div>
        </ReviewWrap>
    </>
  )
}
