import React, { useState } from 'react'
import { Error, Form, Input, Switcher, Title, Wrapper } from '../components/AuthCommon'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FirebaseError } from 'firebase/app'
import { styled } from 'styled-components'



const ForgotPasswd = styled.input`
    width: calc(100% - 60px);
    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 10px;
    border: 1px solid #ccc;
    outline: none;
    background-color: transparent;
    font-size: 14px;
    cursor: pointer;
`

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onChange = (e)=>{
        const {target : {name, value}} = e;
        if(name === 'email'){
            setEmail(value)
        }else if(name === 'password'){
            setPassword(value)
        }
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        setError('')

        if(email ==="" || password === "")return;
        try{
            await signInWithEmailAndPassword(auth,email,password)
            navigate('/main')
        }catch(e){
            if(e instanceof FirebaseError){
                setError(e.message) //firebase 에러가 있다면 에러 메세지를 setError에 저장
            }
        }


    }

    const resetPasswd = async ()=>{
        try{
            await sendPasswordResetEmail(auth,email)
            alert('가입하신 이메일에서 비밀번호 초기화를 하실수 있습니다.')
        }catch(e){
            alert('가입하신 이메일을 확인하고 이메일란에 작성해 주세요.')
            console.log(e)
        }
    } 

  return (
    <>
       <Wrapper>

            <Title>로그인</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} value={email} name='email' placeholder='email' type='email' required></Input>
                <Input onChange={onChange} value={password} name='password' placeholder='password' type='password' required></Input>
                <Input  value="로그인" type='submit'></Input>

            </Form>
            {error !== '' ? <Error>{error}</Error> : null }
            <Switcher>
                계정이 없으신가요? <Link to='/join'>계정 만들기</Link>
            </Switcher>

            <ForgotPasswd type='button' value="비밀번호 찾기" onClick={resetPasswd}/>
                
           

       </Wrapper>



    </>
  )
}
