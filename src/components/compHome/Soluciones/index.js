import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid } from '@material-ui/core'
import { TitleLine, ContainerSwiper } from './styles'
import { Slide } from '../SliderSoluciones/Slide'
import SwiperStyles from 'swiper/swiper-bundle.min.css'

import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

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
            loop
          >
            <SwiperSlide>
              <Slide
                imagePath='ImgExpandingStore.png'
                url='/soluciones/expanding-brand/'
                text='Ideal para marcas en crecimeinto, con tiendas posicionadas en elmercado y que se
                      encuentran en expansión.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                imagePath='ImgNewStore.png'
                url='soluciones/new-store'
                text='Ideal para marcas nuevas que van a construir su primer punto de venta físico.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                imagePath='ImgStoreRestyling.png'
                url='/soluciones/storerestayling/'
                text='Ideal para marcas que quieren remodelar sus tiendas.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                imagePath='ImgOmnichannelStore.png'
                url='/soluciones/omnichannel-store/'
                text='Ideal para marcas que reponden a nuevos comportamientos de compra.'
              />
            </SwiperSlide>
          </ContainerSwiper>
        </Grid>
      </Grid>
    </ContenedorPadre>
  )
}
