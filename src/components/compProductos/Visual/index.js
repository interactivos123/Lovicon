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

export const Visual = () => {
  return (
    <MyBoxBackground>
      <ContenedorPadre mt={{ xs: 5, md: 10, lg: 15 }}>
        <Grid container alignItems='center'>

          <Grid item xs={10} sm={8} md={5}>
            <Image name='construyendoTiendas.png' description='Construyendo tiendas' />
          </Grid>

          <Grid item xs={12} md={7}>
            <Box>
              <Grid container spacing={1}>
                <Grid item md={2}>
                  <LineaHorizontal />
                </Grid>
                <Grid item md={10}>
                  <Typography variant='subtitle1'>VISUAL</Typography>
                  <Typography variant='subtitle2'>MERCHANDISING</Typography>
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
                        <Descripcion titulo='Creamos Estrategias que potencian ventas.' texto='Acompañamos a las marcas a crear estrategias a nivel técnico    modificando factores de la tienda que ayuden a potenciar las ventas y a tener un   comercio mucho más rentable. ' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='Aumentamos la rentabilidad de tu tienda' texto='Ubicamos tus productos de la forma más rentable posible según el formato de tienda. ' />
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
