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
            content='Luego de que tengas seleccionado el local donde quieres construir tu tienda, hacemos
            una visita en la que definimos el alcance y tiempos de la obra, visitamos otros locales de la
            marca y realizamos un levantamiento arquitectónico del sitio (incluye plantas y cortes)'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='02'
            title='Creamos'
            content='Atendiendo a los antecedentes de tu marca, como tiendas existentes y manuales de diseño
            y construcción, iniciamos a desarrollar un primer concepto del proyecto en el que incluimos la
            ubicación de mobiliario, fachadas y letreros apoyados por alzados y propuestas tridimensionales.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='03'
            title='Presupuestamos'
            content='Una vez tu marca seleccione la mejor propuesta realizamos un presupuesto que incluye:
            actividades preliminares como demoliciones, pisos, Mamposteria, instalaciones eléctricas, voz y
            datos, iluminación, fachada, avisos, pintura, acabados, mobiliario, sistema de aire
            acondicionado y sistema de red contra incendios.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='04'
            title='Proyectamos'
            content='Presentamos una propuesta definitiva que contiene diseños, planos detallados, anexos
            y cronograma. Esta propuesta se comparte a la administración del centro comercial o a la
            curaduria para poder obtener el permiso de construcción.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='05'
            title='Construimos'
            content='Finalmente presentamos un proyecto de ejecución que incluye los planos de ejecución e
            iniciamos con la obra.'
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
        content='Luego de que tengas seleccionado el local donde quieres construir tu tienda, hacemos
        una visita en la que definimos el alcance y tiempos de la obra, visitamos otros locales de la
        marca y realizamos un levantamiento arquitectónico del sitio (incluye plantas y cortes)'
      />
      <Card
        number='02'
        title='Creamos'
        content='Atendiendo a los antecedentes de tu marca, como tiendas existentes y manuales de diseño
        y construcción, iniciamos a desarrollar un primer concepto del proyecto en el que incluimos la
        ubicación de mobiliario, fachadas y letreros apoyados por alzados y propuestas tridimensionales.'
      />
      <Card
        number='03'
        title='Presupuestamos'
        content='Una vez tu marca seleccione la mejor propuesta realizamos un presupuesto que incluye:
        actividades preliminares como demoliciones, pisos, Mamposteria, instalaciones eléctricas, voz y
        datos, iluminación, fachada, avisos, pintura, acabados, mobiliario, sistema de aire
        acondicionado y sistema de red contra incendios.'
      />
      <Card
        number='04'
        title='Proyectamos'
        content='Presentamos una propuesta definitiva que contiene diseños, planos detallados, anexos
        y cronograma. Esta propuesta se comparte a la administración del centro comercial o a la
        curaduria para poder obtener el permiso de construcción.'
      />
      <Card
        number='05'
        title='Construimos'
        content='Finalmente presentamos un proyecto de ejecución que incluye los planos de ejecución e
        iniciamos con la obra.'
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
