import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components' 

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
   
   
    .search_box{
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
    }

`

export default function Header() {
  return (
    <div>
        <HeadBox>
            <div className="logo_box">
                <p>Busan Cafe</p>
            </div>
            <div className="search_box">
                <Link to='/search'><img src={ process.env.PUBLIC_URL + '/img/search.png'} alt="img"/></Link>
            </div>

        </HeadBox>



    </div>
  )
}
