import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { styled } from 'styled-components';

const SlideWrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F8E1E3;

    &.wrap2{
        background-color: #D3E7DC; 
    }
    &.wrap3{
        background-color: #A6C1E8;
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
