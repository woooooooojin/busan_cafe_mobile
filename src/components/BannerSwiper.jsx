import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';

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
const Desc = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        width: 70px;
        height: 70px;
        border: 1px solid #ccc;
        @media (min-width: 768px) {
          width: 100px;
          height: 100px;
          line-height: 100px;
         
        }
    }

    p{
        width: calc(100% - 70px - 3%);
        height: 70px;
        border: 1px solid #ccc;
        @media (min-width: 768px) {
          width: calc(100% - 100px - 5%);
          height: 100px;
          line-height: 100px;
         
        }
    }
`

export default function BannerSwiper() {
  return (
    <Swiper
    modules={[Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{delay : 3000}}
    loop={true}
   
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <SlideWrap >
            <Desc>
                <img src="" alt="banner_img" />
                <p>slide1</p>
            </Desc>
        </SlideWrap>
    </SwiperSlide>

    <SwiperSlide>
        <SlideWrap className='wrap2'>
            <Desc>
                <img src="" alt="banner_img" />
                <p>slide1</p>
            </Desc>
        </SlideWrap>
    </SwiperSlide>
    
    <SwiperSlide>
        <SlideWrap className='wrap3'>
            <Desc>
                <img src="" alt="banner_img" />
                <p>slide1</p>
            </Desc>
        </SlideWrap>
    </SwiperSlide>
   
  </Swiper>
  )
}
