import React, { useState } from 'react'
import { Error, Form, Input, Switcher, Title, Wrapper } from '../components/AuthCommon'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { FirebaseError } from 'firebase/app'
import GithubLogin from '../components/GithubLogin'

export default function Join() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onChange = (e)=>{
        const {target : {name, value}} = e;
        if(name === 'name'){
            setName(value)
        }else if(name === 'email'){
            setEmail(value)
        }else if(name === 'password'){
            setPassword(value)
        }
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        setError('')

        if(name === "" || email ==="" || password === "")return;
        try{
            const credential = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(credential.user,{
                displayName : name,
            })
            navigate('/login')
        }catch(e){
            if(e instanceof FirebaseError){
                setError(e.message) //firebase 에러가 있다면 에러 메세지를 setError에 저장
            }
        }


    }


  return (
    <>
        <Wrapper>

            <Title>회원가입</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} value={name} name='name' placeholder='name' type='text' required></Input>
                <Input onChange={onChange} value={email} name='email' placeholder='email' type='email' required></Input>
                <Input onChange={onChange} value={password} name='password' placeholder='password' type='password' required></Input>
                <Input  value="계정생성" type='submit'></Input>

            </Form>
            {error !== '' ? <Error>{error}</Error> : null }
            <Switcher>
                이미 계정이 있으신가요? <Link to='/login'>로그인 하기</Link>
            </Switcher>
            <GithubLogin/>

        </Wrapper>
    </>
  )
}
