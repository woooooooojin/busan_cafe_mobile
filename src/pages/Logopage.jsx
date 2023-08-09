import  { React,useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import { AttentionSeeker } from 'react-awesome-reveal';
import styled from 'styled-components' 


const LogoBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
 

    h1{
        text-align: center;
        text-shadow: 0 0 10px black;
        color: #fff;
        font-size: 40px;
        margin-top: 50px;
        @media (min-width: 768px) {
            font-size: 50px;
        }
        @media (min-width: 1440px) {
            font-size: 60px;
        }
  
    }

    .logo_wrap{
        width: 300px;
        height: 300px;
        @media (min-width: 768px) {
           width: 450px;
           height: 450px;
        }
        @media (min-width: 1440px) {
            width: 550px;
            height: 550px;
        }
        
    }
    .logo_wrap img{
        width: 100%;
        height: 100%;
    }

    p{
        font-size: 14px;
        color: #777;
        margin-bottom: 10px;
        @media (min-width: 768px) {
         font-size: 16px;
        }
        @media (min-width: 1440px) {
            font-size: 20px;
        }
    }

`


export default function Logopage() {
const navigate = useNavigate()

const timeout = ()=>{
    setTimeout(() => {
		navigate('/main');
	}, 2000);
    
}

useEffect(() => {
	timeout();
	return () => {
	    clearTimeout(timeout);
	};
}); 
//랜더링되면 timeout실행 실행 후 클리어



return (
    <div>
        <LogoBox>
            <AttentionSeeker tada>
                <h1>Busan Cafe</h1>

                <div className="logo_wrap">
                    <img src={ process.env.PUBLIC_URL + '/img/cafe_icon.png'} alt="img"/>
                </div>

                <p>ⓒ 2023. Woojin all rights reserved.</p>

            </AttentionSeeker>
        </LogoBox>


    </div>
  )
}
