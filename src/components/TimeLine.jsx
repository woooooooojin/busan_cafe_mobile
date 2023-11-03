import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { collection, disableNetwork, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Unsubscribe } from "firebase/auth";



const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

export default function TimeLine() {
    const [post, setPost] = useState([])

    useEffect(()=>{
        let unsubscribe = null

        const fetchPosts = async()=>{
            const postQuery = query(
                collection(db,'posts'), //어떤 컬ㅔ션을 쿼하 싶은지 firestore 인스턴스를 매개변수로 넘겨줌
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
            }
        </Wrapper>
    </>
  )
}
