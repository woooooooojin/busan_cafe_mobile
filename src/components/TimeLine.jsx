import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { collection, deleteDoc, doc, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db, storage } from '../firebase';
import { deleteObject, ref } from 'firebase/storage';



const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 50px;

    .wrap{
        border: 1px solid #A6C1E8;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .text_wrap{
        width: 70%;
        .username{
            font-weight: 500;
            font-size: 18px;
        }
        .post_desc{
            margin-top: 5px;
        }
    }
    .img_wrap{
        width: 30%;
        text-align: center;
        img{
            width: 70px;
            height: 70px;
        }
    }

    .del_btn{
        position: absolute;
        right: 5px;
        top: 5px;
        z-index: 99;
        cursor: pointer;
    }
`
const DeleteBtn = styled.button`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 50%;
    font-size: 12px;
    border: 1px solid tomato;
    color: tomato;
`

export default function TimeLine() {
    const [post, setPost] = useState([])
    const user = auth.currentUser

    useEffect(()=>{
        let unsubscribe = null

        const fetchPosts = async()=>{
            const postQuery = query(
                collection(db,'posts'), //어떤 컬렉션을 쿼리하고 싶은지 firestore 인스턴스를 매개변수로 넘겨줌
                orderBy('createdAt',"desc"), //createdAt 기준으로 내림차순
                limit(25)
            )
            
                unsubscribe = await onSnapshot(postQuery, (snapshot)=>{
                const posting = snapshot.docs.map((doc)=>{
                    const {post, createdAt, userId, username, photo} = doc.data()
                    return{
                        post, createdAt, userId, username, photo,
                        id:doc.id
                    }
                })
                setPost(posting)
            })
        }; 
        fetchPosts()
        return()=>{
            unsubscribe && unsubscribe()
        }   
    },[]) 

    const onDelete = async(item)=>{
        const ok = window.confirm('삭제하시겠습니까?')
       
        if(!ok || user.uid !== item.userId)return
    
       try{
        //doc함수를 사용하여 db에서 포스트를 찾고 deleteDoc함수를 입력해주어야 한다
        //doc 함수 인자 : db, document 이름, id
            await deleteDoc(doc(db,'posts',item.id))
            

            if(item.photo){
                const photoRef = ref(storage, `posts/${user.uid}/${item.id}`) //storage 사진의 경로
                await deleteObject(photoRef)
            }
       
       }catch(e){
        console.log(e)
       }
       
    }

   

  return (
    <>
        <Wrapper>
            
            
                 {
                    post.map((item) => (
                    <div className='wrap' key={item.id}>
                   
                    {user.uid === item.userId ? <DeleteBtn className='del_btn' onClick={() => onDelete(item)}>X</DeleteBtn> : null}     
                        <div className="text_wrap">
                            <span className='username'>{item.username}</span>
                            <p className='post_desc'>{item.post}</p>
                        </div>

                        <div className="img_wrap">
                            {item.photo ? <img src={item.photo} alt="img" /> : null}
                        </div>
                    </div>
                  ))
                }
            
        </Wrapper>
    </>
  )
}
