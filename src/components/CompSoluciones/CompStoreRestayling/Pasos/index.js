import React from 'react'
import { Box, Hidden } from '@material-ui/core'
import { ContainerCard, StepNumber, StepTitle, StepContent, ContainerSwiper, ContainerList } from './styles'
import { ListItem } from '../../../generals/ListItem'

import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import SwiperStyles from 'swiper/swiper-bundle.min.css'

const Card = ({ number, title, content }) => {
  return (
    <ContainerCard>
      <ListItem>
        <StepNumber>{number}</StepNumber>
        <StepTitle>{title}</StepTitle>
        <StepContent variant='p'>{content}</StepContent>
      </ListItem>
    </ContainerCard>
  )
}

SwiperCore.use([Autoplay, Navigation])

const CarrouselPasos = () => {
  return (
    <Box mt={5} mx={{ xs: 0, sm: 5, md: 8, lg: 12.5 }}>
      <ContainerSwiper
        spaceBetween={0}
        slidesPerView='auto'
        className={SwiperStyles}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        navigation
      >
        <SwiperSlide>
          <Card
            number='01'
            title='Evaluamos'
            content='Hacemos una visita a tu local, definimos las necesidades, el presupuesto,alcance y
            tiempos de la obra, realizamos un levantamiento arquitectónico del sitio (incluye plantas y
            cortes)'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='02'
            title='Diseñamos'
            content='Iniciamos a desarrollar un primer concepto del proyecto en el que incluimos la
            ubicación de mobiliario, fachadas y demás elementos que se incluyan en el proyecto de
            remodelación. Apoyados por alzados y propuestas tridimensionales definimos el diseño final.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='03'
            title='Fabricamos'
            content='Una vez definido el diseño, iniciamos a fabricar el mobiliario y demás elementos
            que requiera la remodelación de la tienda.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='04'
            title='Construimos'
            content='Iniciamos a construir.'
          />
        </SwiperSlide>
      </ContainerSwiper>
    </Box>
  )
}

export const ListPasos = () => {
  return (
    <ContainerList>
      <Card
        number='01'
        title='Evaluamos'
        content='Hacemos una visita a tu local, definimos las necesidades, el presupuesto,alcance y
        tiempos de la obra, realizamos un levantamiento arquitectónico del sitio (incluye plantas y
        cortes)'
      />
      <Card
        number='02'
        title='Diseñamos'
        content='Iniciamos a desarrollar un primer concepto del proyecto en el que incluimos la
        ubicación de mobiliario, fachadas y demás elementos que se incluyan en el proyecto de
        remodelación. Apoyados por alzados y propuestas tridimensionales definimos el diseño final.'
      />
      <Card
        number='03'
        title='Fabricamos'
        content='Una vez definido el diseño, iniciamos a fabricar el mobiliario y demás elementos
        que requiera la remodelación de la tienda.'
      />
      <Card
        number='04'
        title='Construimos'
        content='Iniciamos a construir.'
      />
    </ContainerList>
  )
}

export const Pasos = () => {
  return (
    <>
      <Hidden xsDown>
        <CarrouselPasos />
      </Hidden>
      <Hidden smUp>
        <ListPasos />
      </Hidden>
    </>
  )
}
