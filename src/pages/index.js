import React from 'react'
import SEO from '../components/seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import { Slide1 } from '../components/Slides/Slide1'
import { Slide2 } from '../components/Slides/Slide2'
import { Slide3 } from '../components/Slides/Slide3'
import { Construyendo } from '../components/compHome/Construyendo'
import { RetailNumeros } from '../components/compHome/RetailNumeros'
import { RetailRenovacion } from '../components/compHome/RetailRenovacion'

SwiperCore.use([Pagination])

const Inicio = () => {
  return (
    <>
      <SEO title='Inicio' />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={SwiperStyles}
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
      <Construyendo />
      <RetailNumeros />
      <RetailRenovacion />
    </>
  )
}

export default Inicio
