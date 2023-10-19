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
        width: 33.3333%;
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
        width: 33.3333%;
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
        width: 33.3333%;
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

  
`




export default function Footer() {
    
const navigate = useNavigate();
const navigateToHome = () => {
     navigate("/main");
};
const navigatePrev = ()=>{
    navigate(-1)
}




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
            

            <div className="back_box" onClick={navigatePrev}>
                <img src={ process.env.PUBLIC_URL + '/img/back.png'} alt="img" /> 
            </div>


          

        </FooterBox>
    </div>
  )
}
