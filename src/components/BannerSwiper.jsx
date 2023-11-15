import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay} from 'swiper/modules';

import 'swiper/css';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const SlideWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85px;
    margin-bottom: 10px;
    background-color: #A6C1E8;

    &.wrap2{
        background-color: #C2DEDC; 
    }
    &.wrap3{
        background-color: #CEE6F3;
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
    justify-content: space-evenly;
    align-items: center;
    padding: 0 20px;
    @media (min-width: 768px) {
         padding: 0 50px;
         
    }

    img{
        width: 70px;
        height: 70px;
        @media (min-width: 768px) {
          width: 100px;
          height: 100px;
          line-height: 100px;
         
        }
    }

    p{
        width: calc(100% - 70px - 3%);
        height: 70px;
        font-size: 18px;
        font-weight: 550;
        color: #fff;
        @media (min-width: 768px) {
          width: calc(100% - 100px - 5%);
          height: 100px;
          line-height: 100px;
          font-size: 22px;
         
        }
    }
`

export default function BannerSwiper() {
  return (
    <Swiper
    modules={[Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{delay : 2500, disableOnInteraction : false}}
    loop={true}
   
    
  >
    <SwiperSlide>
        <Link to='/haeundae'>
            <SlideWrap >
                <Desc>
                    <img src={ process.env.PUBLIC_URL + '/img/sea.png'} alt="banner_img" />
                    <p>바다뷰와 커피를 즐기고 싶다면?</p>
                </Desc>
            </SlideWrap>
        </Link>
    </SwiperSlide>

    <SwiperSlide>
        <Link to='/suyeong'>
            <SlideWrap className='wrap2'>
                <Desc>
                    <img src={ process.env.PUBLIC_URL + '/img/bridge_icon.png'} alt="banner_img" />
                    <p>광안리에서 커피 한잔 어때?</p>
                </Desc>
            </SlideWrap>
        </Link>
    </SwiperSlide>
    
    <SwiperSlide>
        <Link to='/community'>
            <SlideWrap className='wrap3'>
                <Desc>
                    <img src={ process.env.PUBLIC_URL + '/img/chat_icon.png'} alt="banner_img" />
                    <p>커뮤니티 서비스 실시 !!</p>
                </Desc>
            </SlideWrap>
        </Link>
    </SwiperSlide>
   
  </Swiper>
  )
}
