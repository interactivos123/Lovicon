import React from 'react'
import { ContenedorPadre, Title } from '../../../theme'
import { Box, Hidden } from '@material-ui/core'
import { Imagenes } from '../../generals/Imagenes'
import Image from '../../image'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import SwiperCore, { Pagination, Autoplay } from 'swiper'

SwiperCore.use([Pagination, Autoplay])

export const Tiendas = () => {
  return (
    <>
      <ContenedorPadre>
        <Box mt={10}>
          <Title>Nuestras tiendas</Title>
          <Box my={5}>
            <Imagenes img1='arquitectura1.jpg' img2='arquitectura2.jpg' img3='arquitectura3.jpg' />
          </Box>
        </Box>
      </ContenedorPadre>
      <Hidden mdUp>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          // pagination={{
          //   clickable: true,
          //   type: 'fraction'
          // }}
          className={SwiperStyles}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop
        >
          <SwiperSlide><Image name='arquitectura1.jpg' /></SwiperSlide>
          <SwiperSlide><Image name='arquitectura1.jpg' /></SwiperSlide>
          <SwiperSlide><Image name='arquitectura1.jpg' /></SwiperSlide>
        </Swiper>
      </Hidden>
    </>
  )
}
