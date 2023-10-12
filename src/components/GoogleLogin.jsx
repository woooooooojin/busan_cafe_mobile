import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'

const Button = styled.div`
    padding: 6px;
    width: calc(100% - 60px);
    border-radius: 50px;
    border: 1px solid #ccc;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    color: black;
    margin-top: 10px;
    cursor: pointer;
    font-size: 14px;
`

const Logo = styled.img`
    height: 23px;
`


export default function GoogleLogin() {

    const navigate = useNavigate();
    const onClick = async ()=>{
        try{
            const provider = new GoogleAuthProvider()
            await signInWithRedirect(auth,provider)
            navigate('/main')
        }catch(e){
            console.log(e)
        }
    }

  return (
    <>
        <Button onClick={onClick}>
            <Logo src={process.env.PUBLIC_URL + '/img/googleicon.png'}/> 
            Continue With Google
        </Button>
    </>
  )
}
