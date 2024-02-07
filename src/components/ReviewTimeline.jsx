import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../firebase'
import styled from 'styled-components'
import { collection, deleteDoc, doc, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'

export default function ReviewTimeline({id}) {
    const [post, setPost] = useState([])
    const user = auth.currentUser
    const [profile, setProfile] = useState(null)


    useEffect(()=>{
        let unsubscribe = null

        const fetchReview = async ()=>{
            const reviewQuery = query(
                collection(db, `review-${id}`), //각각의 아이템의 고유 아이디부여해서 각각을 리뷰할수 있도록 함
                orderBy('createdAt',"desc"),
                limit(25)
            )
            unsubscribe = await onSnapshot(reviewQuery, (snapshot)=>{
                const posting = snapshot.docs.map((doc)=>{
                    const {post, createdAt, userId, username} = doc.data()
                    return{
                        post, createdAt, userId, username, id:doc.id
                    }
                })
                setPost(posting)
            })
        } //fetch review

        const fetchProfile = async ()=>{
            if(user){
                const profileRef = ref(storage, `profile/${user.uid}`)

                try{
                    const url = await getDownloadURL(profileRef)
                    setProfile(url)
                }catch(err){
                    console.log(err)
                }
            }
        }


        fetchReview()
        fetchProfile()

    },[])

    const onDelete = async(item)=>{
        const ok = window.confirm('삭제하시겠습니까?')

        if(!ok || !user || user.uid !== item.userId)return;

        try{
            await deleteDoc(doc(db,`review-${id}`,item.id))
        }catch(err){
            console.log(err)
        }
    }

    const Wrapper = styled.div`
        width: 100%;
        padding: 0 10px;
        margin-bottom: 70px;

        .wrap{
            display: flex;
            height: 70px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 5px 10px;

            .profile{
                width: 15%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    border: 1px solid #ccc;
                    width: 50px;
                    height: auto;
                    border-radius: 50%;
                    
                    
                }
            }
            .text{
                width: 75%;
                padding: 0 10px;

                .text_wrap{
                    width: 100%;
                    height: 100%;
                    position: relative;
                   .review_name{
                        position: absolute;
                        top: 0;
                        font-weight: 550;
                    }
                    .review_desc{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        margin-bottom: 5px;
                        font-size: 14px;
                    }
                }
                
            }
            .delBtn{
                width: 10%;
                position: relative;

                button{
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background-color: transparent;
                    color: tomato;
                    border: 1px solid tomato;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }

    `

  return (
    <>
        <Wrapper>
            {post.map((item)=>(
                <div className="wrap">

                    <div className="profile">
                        <img src={profile} alt="img" />
                    </div>

                    <div className="text">
                        <div className="text_wrap">
                            <p className='review_name'>{item.username}</p>
                            <p className='review_desc'>{item.post}</p>
                        </div>
                        
                    </div>

                    <div className="delBtn">
                        <button onClick={()=>onDelete(item)}>X</button>
                    </div>

                </div>
            ))} 

            
        </Wrapper>    
    </>
  )
}
