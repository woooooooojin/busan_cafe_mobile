import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';



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
`

export default function TimeLine() {
    const [post, setPost] = useState([])
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

   

  return (
    <>
        <Wrapper>
            
                 {
                    post.map((item) => (
                    <div className='wrap' key={item.id}>
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
