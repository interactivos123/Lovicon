import React from 'react'
import { Box } from '@material-ui/core'
import { Title, SwiperContainer } from './styles'
import { ContenedorPadre } from '../../../theme'
import Image from '../../image'

import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

export const Clientes = () => {
  return (
    <ContenedorPadre>
      <Box my={10}>
        <Title>Clientes</Title>
        <SwiperContainer
          spaceBetween={40}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop
        >
          <SwiperSlide><Image name='KIA.png' /></SwiperSlide>
          <SwiperSlide><Image name='MAC.png' /></SwiperSlide>
          <SwiperSlide><Image name='BBC.jpg' /></SwiperSlide>
          <SwiperSlide><Image name='JAC.png' /></SwiperSlide>
          <SwiperSlide><Image name='CHUCKE.png' /></SwiperSlide>
          <SwiperSlide><Image name='CAPONES.png' /></SwiperSlide>
          <SwiperSlide><Image name='PROARCA.png' /></SwiperSlide>
          <SwiperSlide><Image name='SHETLAN.png' /></SwiperSlide>
          <SwiperSlide><Image name='ZANNA.png' /></SwiperSlide>
        </SwiperContainer>
      </Box>
    </ContenedorPadre>
  )
}
