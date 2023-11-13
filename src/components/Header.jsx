import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components' 
import { auth } from '../firebase';
import Profile from '../pages/Profile';

const HeadBox = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
   

    .logo_box{
        width: 50%

    }
    .logo_box p{
        text-shadow: 0 0 5px black;
        color: #fff;
        font-size: 30px;
        text-align: left;
        padding:  0 10px;
     
    }
   
   
    
    

    .user_box{
        width: 50%;
        margin-right: 8px;
        cursor: pointer;
        text-align: right;
    }
    .user_box svg{
        width: 40px;
        height: auto;
    }

`

export default function Header() {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate('/main');
    }
    // const onClick = () => {
    //     auth.signOut()
    //     navigate('/login')
    // } 

    // const user = auth.currentUser;

    // const gotoLogin = ()=>{
    //     navigate('/login')
    // }

  return (
    <div>
        <HeadBox>
            <div className="logo_box" onClick={goToHome}>
                <p>Busan Cafe</p>
            </div>
{/*            
            {user ? 
            <div className="logout_box" onClick={onClick}>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                </svg>
            </div> :  
             <div className="login_box" onClick={gotoLogin}>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
             </div>   
            } */}
            
            <div className="user_box">
                <Link to='/profile'>
                    <svg fill="none" stroke="#777" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </Link>
            </div>
        </HeadBox>



    </div>
  )
}
