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

export const Arquitectura = () => {
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
                  <Typography variant='subtitle1'>Arquitectura</Typography>
                  <Typography variant='subtitle2'>y construcción</Typography>
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
                        <Descripcion titulo='Agregamos valor a tu marca' texto='La arquitectura comercial se ha convertido en una sofisticada estrategia de marketing, a través de ella podemos incrementar el valor de tu marca y destacar tus productos entre la densa oferta comercial.' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='Mantenemos tu tienda actualizada' texto='Mantenemos tu tienda actualizada con las ultimas tendencias de arquitectura comercial, nuevas formas y nuevos materiales.' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='Un solo proveedor' texto='Disminuye costos  y ahorra tiempo al acudir a múltiples proveedores, nosotros nos haremos cargo de todo el   proceso de construcción. ' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='Obsesionados por los detalles' texto='Cuidamos al máximo cada elemento de la tienda para que el único protagonista del espacio sea tu producto' />
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
