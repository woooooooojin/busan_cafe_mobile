import { GithubAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { auth } from '../firebase'

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

export default function GithubLogin() {

    const navigate = useNavigate();
    const onGitClick = async ()=>{
        try{
            const provider = new GithubAuthProvider()
            await signInWithPopup(auth,provider)
            navigate('/main')
        }catch(e){
            console.log(e)
        }
    }

  return (
    <>
        <Button onClick={onGitClick}>
            <Logo src={process.env.PUBLIC_URL + '/github-logo.svg'}/> 
            Continue With Github
        </Button>
    </>
  )
}
