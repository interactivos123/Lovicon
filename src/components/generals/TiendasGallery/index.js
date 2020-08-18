import React from 'react'
import { ContenedorPadre, Title } from '../../../theme'
import { Box, Hidden } from '@material-ui/core'
import { Imagenes } from '../ImagenesGaleria'
import { ModalImagen } from '../ModalImagen'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import SwiperCore, { Pagination, Autoplay } from 'swiper'

SwiperCore.use([Pagination, Autoplay])

export const TiendasGaleria = ({ title, imagenes }) => {
  return (
    <>
      <ContenedorPadre>
        <Box mt={10}>
          <Title>{title}</Title>
          <Box my={5}>
            <Imagenes imagenes={imagenes} />
          </Box>
        </Box>
      </ContenedorPadre>

      <Hidden mdUp>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          className={SwiperStyles}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop
        >
          {imagenes.map((img, id) =>
            <SwiperSlide key={id}>
              <ModalImagen name={img} />
            </SwiperSlide>
          )}
        </Swiper>
      </Hidden>

    </>
  )
}
