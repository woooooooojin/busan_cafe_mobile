import React, { useState } from 'react'
import { styled } from 'styled-components'
import { auth, db, storage } from '../firebase'
import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'


const Wrapper = styled.div`
    padding: 20px 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TextArea =styled.textarea`
    resize: none;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #A6C1E8;
    width: 100%;
    &:focus{
        outline: none;
        border-color: #A6C1E8;
    }
  
`
const FileWrap = styled.div`
    width: 100%;
    display: flex;
`
const FileBtn = styled.label`
    width: calc(50% - 10px);
    padding: 10px 0;
    background-color: transparent;
    border: 1px solid #A6C1E8;
    color: steelblue;
    text-align: center;
    border-radius: 10px;
    margin-right: 20px;
    font-size: 14px;
`
const FileInput = styled.input`
    display: none;
`
const SubmitBtn = styled.input`
    width: calc(50% - 10px);
    padding: 10px 0;
    background-color: transparent;
    border: 1px solid #A6C1E8;
    color: steelblue;
    border-radius: 10px;
    font-size: 14px;
    
`

export default function PostForm() {

    const [loading, setLoading] = useState(false); //loading
    const [post, setPost] = useState('') //post textarea
    const [file, setFile] = useState(null) //file


    const onChange = (e)=>{
        setPost(e.target.value)
    } //post change event

    const onFileChange = (e)=>{
        const {files} = e.target
        if(files && files.length === 1){
            setFile(files[0])
        }
    } //file change event(photo)

    const onSubmit = async(e)=>{
        e.preventDefault()
        const user = auth.currentUser //user info
        if(!user || loading || post === '' || post.length > 150) return //kill function

        try{
            setLoading(true)
            const doc = await addDoc(collection(db,'posts'),{
                post,
                createdAt : Date.now(),
                username: user.displayName || '사용자',
                userId: user.uid,
            })
            if(file && file.size <= 3 * 1024 * 1024){ //파일이존재하거나 3메가 이하일경우
                const locationRef = ref(storage,`posts/${user.uid}/${doc.id}`) //파일업로드 경로 지정
                const result = await uploadBytes(locationRef,file) //파일 업로드 후 결과정보를 반환
                const url = await getDownloadURL(result.ref) // 업로드한 사진의 url을 추출
                await updateDoc(doc,{ //doc에 다운로드 링크첨부 가능
                    photo: url,
                })
            }
            setPost('') //포스트 글 초기화
            setFile(null)//사진 초기화
        }catch(e){
            console.log(e)
        }finally{
            setLoading(false)
        }
 
    } //submit event


  return (
    <>
        <Wrapper>
            <Form onSubmit={onSubmit}>

                <TextArea onChange={onChange} value={post} required rows={5} maxLength={150} placeholder='내용을 입력해주세요!'></TextArea>
                <FileWrap>
                    <FileBtn htmlFor='file'>{file ? '사진 추가 중..' : '사진 추가'}</FileBtn>
                    <FileInput onChange={onFileChange} type='file' id='file' accept='image/*'></FileInput>
                    <SubmitBtn type='submit' value={loading ? '게시중..' : '게시'}></SubmitBtn>
                </FileWrap>
               

            </Form>
        </Wrapper>
        
    </>
  )
}
