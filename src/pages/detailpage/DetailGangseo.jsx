import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { addItem } from '../../pages/store';

import Review from '../../components/Review';
import ReviewTimeline from '../../components/ReviewTimeline';

const DetailWrap = styled.div`
    width: 100%;
    padding-bottom: 50px;

    .swiper_wrap{
        width: 100%;
        @media (min-width: 768px) {
            height: 600px;
        }
    }

    .slide_img{
        width: 100%;
        font-size: 0;
    }
    .slide_img img{
        width: 100%;
        @media (min-width: 768px) {
            height: 600px;
        }
    }


    .menu_box{
        padding: 20px;
        @media (min-width: 768px) {
           padding: 50px;
        }
    }
    .menu_box img{
        width: 100%; 
        @media (min-width: 768px) {
            height: 600px;
        }
    }

    .detail_box{
        padding: 0 10px;

    }


    .detail_box h2{
        text-align: center;

    }

    .tit_box{
        display: flex;
        margin-top: 10px;
    }
    .box1{
        width: 15%;
    }
    .box2{
        width: 70%;
    }
    .box3{
        width: 15%;
        text-align: right;
    }
    .like_box{
        border: 1.5px solid #ccc;
        width: 60px;
        height: 25px;
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
        color: steelblue;
    }

    .detail_desc{
        margin-top: 10px;
    } 
    .detail_loca{
        margin-top: 10px;

    }
    .detail_loca2{
        margin-top: 10px;
    }
   .detail_time{
    margin-top: 10px;
   }

   span{
    font-weight: bold;
   }

   .menu_wrap{
    padding: 0 10px;
   }
   .menu_wrap p{
    margin-top: 30px;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
   }



`

export default function DetailGangseo(props) {
    const {gangseo} = props
    const {id} = useParams()
    const dispatch = useDispatch()
  return (
    <>

        <Header/>
        <DetailWrap>

        <Swiper
            className='swiper_wrap'
            spaceBetween={50}
            slidesPerView={1}
            >
            <SwiperSlide className='slide_img'><img src={gangseo[id].image} alt="img" /></SwiperSlide>
            <SwiperSlide className='slide_img'><img src={gangseo[id].subimage1} alt="img" /></SwiperSlide>
            <SwiperSlide className='slide_img'><img src={gangseo[id].subimage2} alt="img" /></SwiperSlide>
            <SwiperSlide className='slide_img'><img src={gangseo[id].subimage3} alt="img" /></SwiperSlide>
            
        </Swiper>

        <div className="detail_box">

            <div className="tit_box">
            <div className="box1"></div>

            <div className="box2">
                <h2>{gangseo[id].title}</h2>
            </div>

            <div className="box3">
                <button className="like_box" onClick={()=>{dispatch(addItem({loca: gangseo[id].location, id: gangseo[id].id, image: gangseo[id].image, title: gangseo[id].title ,count: 1}),alert('찜하기에 추가되었습니다.'))}}>
                    찜하기
                </button>
            </div>

            </div>
            <p className='detail_desc'>{gangseo[id].desc}</p>
            <p className='detail_loca'><span>도로명주소</span><br/>{gangseo[id].location}</p>
            <p className='detail_loca2'><span>지번주소</span><br/>{gangseo[id].location2}</p>
            <p className='detail_time'><span>영업시간</span><br/>{gangseo[id].time}</p>
        </div>

        <div className="menu_wrap">
            <p>MENU</p>
            <div className="menu_box">
                <img src={gangseo[id].menu} alt="img" />
            </div>

        </div>

       

        <Review id={gangseo[id].id}/>
        <ReviewTimeline id={gangseo[id].id}/>



        </DetailWrap>
        <Footer/>

    </>
  )
}
