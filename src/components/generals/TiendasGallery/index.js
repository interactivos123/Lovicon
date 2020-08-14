import React from 'react'
import { ContenedorPadre, Title } from '../../../theme'
import { Box, Hidden } from '@material-ui/core'
import { Imagenes } from '../ImagenesGaleria'
import { ModalImagen } from '../ModalImagen'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import SwiperCore, { Pagination, Autoplay } from 'swiper'

SwiperCore.use([Pagination, Autoplay])

export const TiendasGaleria = ({ title, img1, img2, img3 }) => {
  return (
    <>
      <ContenedorPadre>
        <Box mt={10}>
          <Title>{title}</Title>
          <Box my={5}>
            <Imagenes img1={img1} img2={img2} img3={img3} />
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
          <SwiperSlide><ModalImagen name={img1} /></SwiperSlide>
          <SwiperSlide><ModalImagen name={img2} /></SwiperSlide>
          <SwiperSlide><ModalImagen name={img3} /></SwiperSlide>
        </Swiper>
      </Hidden>
    </>
  )
}
