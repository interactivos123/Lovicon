import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import { Slide1 } from './Slides/Slide1'
import { Slide2 } from './Slides/Slide2'
import { Slide3 } from './Slides/Slide3'
import { SliderContainer } from './styles'
import SwiperCore, { Pagination, Autoplay } from 'swiper'

SwiperCore.use([Pagination, Autoplay])

export const Slider = () => {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={40}
        slidesPerView='auto'
        pagination={{
          clickable: true,
          type: 'fraction'
        }}
        className={SwiperStyles}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        loop
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
    </SliderContainer>
  )
}
