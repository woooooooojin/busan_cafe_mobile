import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components' 
import { auth } from '../firebase';

const FooterBox = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;

    div{
        background-color: #fff;
    }
        
    .home_box{
        width: 25%;
        height: 100%;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 0;
       
    }
    .home_box img{
        width:30px;
        height: auto;
    }

    .like_box{
        width: 25%;
        height: 100%;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right:0;
    }
    .like_box img{
        width: 30px;
        height: auto;
    }

    .back_box{
        width: 25%;
        height: 100%;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .back_box img{
        width: 50px;
        height: auto;
    }

    .logout_box{
        width: 25%;
        height: 100%;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 0;
        cursor: pointer;
    }
    .logout_box svg{
        width: 40px;
        height: auto;
    }
`




export default function Footer() {
    
const navigate = useNavigate();
const navigateToHome = () => {
     navigate("/main");
};
const navigatePrev = ()=>{
    navigate(-1)
}

const onClick = () => {
    auth.signOut()
    navigate('/login')
} //logout function

  return (
    <div>
        <FooterBox>

            <div className="home_box" onClick={navigateToHome}>
                <img src={ process.env.PUBLIC_URL + '/img/home.png'} alt="img" />
            </div>

            <div className="like_box">
                <Link to='/cart'>
                    <img src={ process.env.PUBLIC_URL + '/img/heart2.png'} alt="img" />  

                </Link>
            </div>
            
            <div className="logout_box" onClick={onClick}>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                </svg>
            </div>

            <div className="back_box" onClick={navigatePrev}>
                <img src={ process.env.PUBLIC_URL + '/img/back.png'} alt="img" /> 
            </div>

        </FooterBox>
    </div>
  )
}
