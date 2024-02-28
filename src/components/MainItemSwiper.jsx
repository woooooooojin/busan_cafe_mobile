import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import  { Autoplay} from 'swiper/modules';

import 'swiper/css';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


const SlideWrap = styled.div`
    height: 90px;
    border-radius: 15px;
    margin: 15px 0;
    box-shadow: 3px 3px 7px black;
  
`
const Desc = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        width: 65px;
        height: 65px;
        display: inline-block;
        border-radius: 50%;
    }
    p{
        letter-spacing: 3px;
        /* margin-left: 5px; */
    }

   
`


export default function MainItemSwiper() {
  return (
    <>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{delay : 2500, disableOnInteraction : true}}
            style={{width: '100%', padding : '0 10px'}}
           
            
        >
            <SwiperSlide>
                <Link to='/haeundae'>
                    <SlideWrap >
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/haeundae02.png'} alt="img" />
                            <p>해운대</p>

                        </Desc>


                    </SlideWrap>
                </Link>
            </SwiperSlide>

            <SwiperSlide>
                <Link to='/suyeong'>
                    <SlideWrap className='wrap2'>
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/gwanganli01.png'} alt="banner_img" />
                            <p>광안리</p>
                            
                        </Desc>

                    </SlideWrap>
                </Link>

            </SwiperSlide>
            
            <SwiperSlide>
                <Link to='/jungu'>
                    <SlideWrap className='wrap3'>
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/busantower.png'} alt="banner_img" />
                             <p>남포동</p>

                        </Desc>

                    </SlideWrap>
                </Link>

            </SwiperSlide>

            <SwiperSlide>
                <Link to='/gangseo'>
                    <SlideWrap className='wrap3'>
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/gangseogu01.png'} alt="banner_img" />
                             <p>강서구</p>

                        </Desc>

                    </SlideWrap>
                </Link>

            </SwiperSlide>

            <SwiperSlide>
                <Link to='/community'>
                    <SlideWrap className='wrap3'>
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/chat_icon.png'} alt="banner_img" />
                             <p>커뮤니티</p>

                        </Desc>

                    </SlideWrap>
                </Link>

            </SwiperSlide>
        
        </Swiper>
    </>
  )
}
