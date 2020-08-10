import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid } from '@material-ui/core'
import { TitleLine, ContainerSwiper } from './styles'
import { Slide1 } from '../SliderSoluciones/Slide1'
import SwiperStyles from 'swiper/swiper-bundle.min.css'

import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'

SwiperCore.use([Navigation, Autoplay])

export const Soluciones = () => {
  return (
    <ContenedorPadre>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <TitleLine variant='h3'>Soluciones</TitleLine>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <ContainerSwiper
            navigation={{ clickable: true }}
            spaceBetween={40}
            slidesPerView='1'
            className={SwiperStyles}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true
            }}
            loop
          >
            <SwiperSlide><Slide1 /></SwiperSlide>
            <SwiperSlide><Slide1 /></SwiperSlide>
            <SwiperSlide><Slide1 /></SwiperSlide>
            <SwiperSlide><Slide1 /></SwiperSlide>
          </ContainerSwiper>
        </Grid>
      </Grid>
    </ContenedorPadre>
  )
}
