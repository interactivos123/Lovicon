import React from 'react'
import Image from '../../image'
import { Grid, Typography, Box } from '@material-ui/core'
import { LineaHorizontal, ContenedorPadre } from '../../../theme'
import { MyBoxBackground, ContenedorSlider } from './styles'
import { Descripcion } from '../Descripciones'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperStyles from 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination, Autoplay])

export const Diseño = () => {
  return (
    <MyBoxBackground>
      <ContenedorPadre mt={{ xs: 5, md: 10, lg: 15 }}>
        <Grid container alignItems='center'>

          <Grid item xs={10} sm={8} md={5}>
            <Image name='construyendoTiendas.png' />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box>
              <Grid container spacing={1}>
                <Grid item md={2}>
                  <LineaHorizontal />
                </Grid>
                <Grid item md={10}>
                  <Typography variant='subtitle1'>DISEÑO</Typography>
                  <ContenedorSlider>
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
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
                      <SwiperSlide>
                        <Descripcion titulo='Personalizamos tu tienda' texto='Además de los elementos arquitectónicos, el diseño de tiendas engloba múltiples componentes como muebles, lámparas, señal-ización, escaparates y piezas de comunicación que crean la tienda perfecta. ' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='Identidad Única' texto='Creamos espacios donde se refleja al maximo el ADN de tu marca' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='360 Grados' texto='Diseñamos todos los elementos de tu tienda, desde la fachada hasta la señaletica interior.' />
                      </SwiperSlide>
                    </Swiper>
                  </ContenedorSlider>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ContenedorPadre>
    </MyBoxBackground>
  )
}
