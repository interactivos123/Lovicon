import React from 'react'
import { Box, Hidden } from '@material-ui/core'
import { ModalImagen } from '../ModalImagen'
import { ContainerSwiper } from './style'

import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import SwiperStyles from 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay, Navigation])

export const Imagenes = ({ imagenes }) => {
  return (
    <>
      <Hidden smDown>
        <Box>
          <ContainerSwiper
            spaceBetween={0}
            slidesPerView='auto'
            className={SwiperStyles}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            navigation
            loop
          >
            {imagenes.map((img, id) =>
              <SwiperSlide key={id}>
                <Box mx={1}>
                  <ModalImagen name={img} />
                </Box>
              </SwiperSlide>
            )}

          </ContainerSwiper>

        </Box>
      </Hidden>
    </>
  )
}
