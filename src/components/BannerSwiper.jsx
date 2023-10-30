import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { styled } from 'styled-components';

const SlideWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85px;
    margin-bottom: 10px;
    background-color: #A6C1E8;

    &.wrap2{
        background-color: #D3E7DC; 
    }
    &.wrap3{
        background-color: #F8E1E3;
    }
    @media (min-width: 768px) {
          height: 120px;
         
    }
    @media (min-width: 1440px) {
          height: 150px;
          
    }
`


export default function BannerSwiper() {
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <SlideWrap >
            slide1
        </SlideWrap>
    </SwiperSlide>

    <SwiperSlide>
        <SlideWrap className='wrap2'>
            slide2
        </SlideWrap>
    </SwiperSlide>
    
    <SwiperSlide>
        <SlideWrap className='wrap3'>
            slide3
        </SlideWrap>
    </SwiperSlide>
   
  </Swiper>
  )
}
