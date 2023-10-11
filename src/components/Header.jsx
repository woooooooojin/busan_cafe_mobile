import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components' 
import { auth } from '../firebase';

const HeadBox = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
       height: 70px;
    }
    @media (min-width: 1440px) {
        height: 100px;
    }

    .logo_box{
        width: 50%

    }
    .logo_box p{
        text-shadow: 0 0 5px black;
        color: #fff;
        font-size: 30px;
        text-align: left;
        padding:  0 10px;
        @media (min-width: 768px) {
            font-size: 35px;
        }
        @media (min-width: 1440px) {
            font-size: 45px;
        }
    }
   
   
    /* .search_box{
        width: 50%;
        text-align: right;
    }
   
    .search_box a img{
        width: 50px;
        height: 50px;
        padding: 5px;
        @media (min_width : 768px){
            width: 70px;
            height: 70px;
        }
        @media (min-width: 1440px) {
            width: 85px;
            height: 85px;
        }
    } */
    .logout_box{
        width: 50%;
        text-align: right;
        margin-right: 8px;

        svg{
            width: 30px;
        }
    }

`

export default function Header() {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate('/main');
    }
    const onClick = () => {
        auth.signOut()
        navigate('/login')
    } 
  return (
    <div>
        <HeadBox>
            <div className="logo_box" onClick={goToHome}>
                <p>Busan Cafe</p>
            </div>
            {/* <div className="search_box">
                <Link to='/search'><img src={ process.env.PUBLIC_URL + '/img/search.png'} alt="img"/></Link>
            </div> */}
            <div className="logout_box" onClick={onClick}>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"></path>
                </svg>
            </div>
            

        </HeadBox>



    </div>
  )
}
