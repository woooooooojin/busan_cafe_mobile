import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay} from 'swiper/modules';

import 'swiper/css';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


const SlideWrap = styled.div`
    height: 200px;
    margin-bottom: 100px;
    border: 1px solid #eee;
   border-radius: 20px;
  
  
`
const Desc = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;

    img{
        width: 90px;
        height: 90px;
        display: inline-block;
        margin-top: 15px;
        border-radius: 50%;
    }
    p{
        margin-top: 25px;
        text-align: center;
        font-size: 18px;

    }

   
`


export default function MainItemSwiper() {
  return (
    <>
        <Swiper
            // modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={2.5}
            // autoplay={{delay : 2500, disableOnInteraction : true}}
            loop={true}   
            style={{display:'flex', width: '100%', padding : '0 10px'}}
            
        >
            <SwiperSlide style={{height:'200px'}}>
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
                <Link to='/community'>
                    <SlideWrap className='wrap3'>
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/chat_icon.png'} alt="banner_img" />
                             <p>지역1</p>

                        </Desc>

                    </SlideWrap>
                </Link>

            </SwiperSlide>

            <SwiperSlide>
                <Link to='/community'>
                    <SlideWrap className='wrap3'>
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/chat_icon.png'} alt="banner_img" />
                             <p>지역2</p>

                        </Desc>

                    </SlideWrap>
                </Link>

            </SwiperSlide>

            <SwiperSlide>
                <Link to='/community'>
                    <SlideWrap className='wrap3'>
                        <Desc>
                            <img src={ process.env.PUBLIC_URL + '/img/chat_icon.png'} alt="banner_img" />
                             <p>지역3</p>

                        </Desc>

                    </SlideWrap>
                </Link>

            </SwiperSlide>
        
        </Swiper>
    </>
  )
}
