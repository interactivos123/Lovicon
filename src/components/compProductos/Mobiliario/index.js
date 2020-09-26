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

export const Mobiliario = () => {
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
                  <Typography variant='subtitle1'>MOBILIARIO</Typography>
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
                        <Descripcion titulo='Aumentamos la visibilidad de tus prodcutos' texto='El mobiliario permite ubicar los productos en tu tienda de forma atractiva, permite que el            consumidor acceda a ellos fácilmente y te da la posibilidad de jugar con materiales, formas y estilos para realzar los atributos del producto.' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='El mobiliario es la clave' texto='Deja que tus productos tengan mayor visibilidad, crea nuevos ambientes en la tienda y establece zonas de temperatura para vender más.' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <Descripcion titulo='Fabricamos para toda Colombia' texto='Contamos con la capacidad para entregar mobiliario instalado en todas las ciudades de Colombia' />
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
