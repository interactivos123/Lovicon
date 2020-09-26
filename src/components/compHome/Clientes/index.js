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
          spaceBetween={0}
          slidesPerView='auto'
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop
        >
          <SwiperSlide><Image name='KIA.png' description='KIA' /></SwiperSlide>
          <SwiperSlide><Image name='MAC.png' description='MAC' /></SwiperSlide>
          <SwiperSlide><Image name='BBC.jpg' description='BBC' /></SwiperSlide>
          <SwiperSlide><Image name='JAC.png' description='JAC' /></SwiperSlide>
          <SwiperSlide><Image name='CHUCKE.png' description='CHUCKE' /></SwiperSlide>
          <SwiperSlide><Image name='CAPONES.png' description='CAPONES' /></SwiperSlide>
          <SwiperSlide><Image name='PROARCA.png' description='PROARCA' /></SwiperSlide>
          <SwiperSlide><Image name='SHETLAN.png' description='SHETLAN' /></SwiperSlide>
          <SwiperSlide><Image name='ZANNA.png' description='ZANNA' /></SwiperSlide>
        </SwiperContainer>
      </Box>
    </ContenedorPadre>
  )
}
