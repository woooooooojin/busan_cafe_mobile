import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';

const DetailWrap = styled.div`
    width: 100%;

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
   

`



export default function DetailHaeundae(props) {
    const {haeundae} = props
    const {id} = useParams()

  return (
    <div>
        <DetailWrap>

        <Swiper
            className='swiper_wrap'
            spaceBetween={50}
            slidesPerView={1}
            >
            <SwiperSlide className='slide_img'><img src={haeundae[id].image} alt="img" /></SwiperSlide>
            <SwiperSlide className='slide_img'><img src={haeundae[id].subimage1} alt="img" /></SwiperSlide>
            <SwiperSlide className='slide_img'><img src={haeundae[id].subimage2} alt="img" /></SwiperSlide>
            <SwiperSlide className='slide_img'><img src={haeundae[id].subimage3} alt="img" /></SwiperSlide>
            
        </Swiper>

        <div className="detail_box">
            <h2>{haeundae[id].title}</h2>
            <p className='detail_desc'>{haeundae[id].desc}</p>
            <p className='detail_loca'><span>도로명주소</span><br/>{haeundae[id].location}</p>
            <p className='detail_loca2'><span>지번주소</span>{haeundae[id].location2}</p>
            <p className='detail_time'><span>영업시간</span>{haeundae[id].time}</p>
        </div>

        <div className="menu_box">
            <img src={haeundae[id].menu} alt="img" />
        </div>




        </DetailWrap>


    </div>
  )
}
