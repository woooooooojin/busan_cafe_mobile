import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { collection, deleteDoc, doc, limit, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '../firebase';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';



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
        word-break: break-all;
        width: 70%;
        .username{
            font-weight: 500;
            font-size: 18px;
        }
        .post_desc{

            margin-top: 5px;

        }
        .save_btn{
            font-size: 12px;
            background-color: transparent;
            padding: 2px 5px;
            border: 1px solid steelblue;
            border-radius: 5px;
            color: steelblue;
            margin-top: 5px;
            cursor: pointer;
        }
    }
    .img_wrap{
        width: 30%;
        text-align: center;
        img{
            width: 70px;
            height: 70px;
        }

        input{
            display: none;
        }
        .save_photo{
            font-size: 12px;
            background-color: transparent;
            padding: 2px 5px;
            border: 1px solid steelblue;
            border-radius: 5px;
            color: steelblue;
            margin-left: 3px;
            cursor: pointer;
        }
    }

    .del_btn{
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
    }
    .text_area{
        width: 100%;
        resize: none;
        height: 60px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 5px;
        outline: none;
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
const EditImage = styled.label`
    font-size: 12px;
    background-color: transparent;
    padding: 2px 5px;
    border: 1px solid steelblue;
    border-radius: 5px;
    color: steelblue;
    cursor: pointer;
    display: inline-block;
`
const EditPost = styled.button`
    font-size: 12px;
    background-color: transparent;
    padding: 2px 5px;
    border: 1px solid steelblue;
    border-radius: 5px;
    color: steelblue;
    margin-top: 5px;
    cursor: pointer;
`

export default function TimeLine() {
    const [post, setPost] = useState([])
    const user = auth.currentUser
    const [editingPost, setEditingPost] = useState(null); 
    const [editedContent, setEditedContent] = useState('');//text edit
    const [editPhoto, setEditPhoto] = useState(null)//photo edit
    const [editingPhoto, setEditingPhoto] = useState(false)//photo edit state

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
       
    } //onDelete 포스트삭제함수

    const saveEditedPost = async (item) => {
        try {
          await updateDoc(doc(db, 'posts', item.id), {
            post: editedContent,
          });
      
          setEditingPost(null);
        } catch (e) {
          console.log(e);
        }
    }; //post edit save



    const saveEditPhoto = async (item)=>{

        if(item.photo){
            try{
                const photoRef = ref(storage,`posts/${user.uid}/${item.id}`)
                await deleteObject(photoRef)
                await uploadBytes(photoRef,editPhoto)

                const photoUrl = await getDownloadURL(photoRef)
                await updateDoc(doc(db, 'posts', item.id),{
                    photo: photoUrl,
                })

            }catch(e){
                console.log(e)
            }finally{
                setEditPhoto(null)//초기화
                setEditingPhoto(false)

            }   
        }
       
    } //photo edit & save

    const onPhotoChange = (e)=>{
        // const {file} = e.target
        // if(file && file.length === 1){
        //     if(file[0].size > 3 * 1024 * 1024){
        //         e.target.value = ''
        //         return alert('파일사이즈가 큽니다. 3MB 이하만 업로드 가능합니다.')
        //     }
        //     setEditPhoto(file[0])
        // }
        const file = e.target.files[0];
        if (file ) {
            if(file.size > 3 * 1024 * 1024){
                e.target.value = ''
                return alert('파일사이즈가 큽니다. 3MB 이하만 업로드 가능합니다.')
            }
            setEditPhoto(file);
            setEditingPhoto(true)
        }
    } // photo change event
   

  return (
    <>

        <Wrapper>
            {post.map((item) => (
                <div className='wrap' key={item.id}>
                    {user.uid === item.userId ? (<DeleteBtn className='del_btn' onClick={() => onDelete(item)}> X</DeleteBtn>) : null}
                        
                    <div className="text_wrap">
                        
                        <span className='username'>{item.username}</span>

                        {editingPost === item.id ? (
                        <textarea className='text_area' value={editedContent} onChange={(e) => setEditedContent(e.target.value)}/>
                        ) : (<p className='post_desc'>{item.post}</p>)}

                        {user.uid === item.userId ? (
                        editingPost === item.id ? (
                            <button className='save_btn' onClick={() => saveEditedPost(item)}>저장</button>
                        ) : (<EditPost onClick={() => setEditingPost(item.id)}>수정</EditPost>)
                        ) : null}
                    </div>
                    
                    <div className="img_wrap">
                        {item.photo ? <img src={item.photo} alt="img" /> : null}
                        {item.photo && user.uid === item.userId ? (
                        <EditImage htmlFor='files'>수정<input onChange={onPhotoChange} type="file" accept='image/*' id='files'/></EditImage>        
                        ) : null}
                        {item.photo && user.uid === item.userId && editingPhoto ? <button className='save_photo' onClick={()=>saveEditPhoto(item)} >저장</button> : null}
                        
                    </div>
                </div>
            ))}
            </Wrapper>


    </>
  )
}
