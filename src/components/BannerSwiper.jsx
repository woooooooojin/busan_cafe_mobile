import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function BannerSwiper() {
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
   
  </Swiper>
  )
}
