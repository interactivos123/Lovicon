import React from 'react'
import { Box, Hidden } from '@material-ui/core'
import { ContainerCard, StepNumber, StepTitle, StepContent, ContainerSwiper, ContainerList } from './styles'
import { ListItem } from '../../../generals/ListItem'

import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
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

SwiperCore.use([Autoplay])

const CarrouselPasos = () => {
  return (
    <Box mt={5} ml={{ xs: 0, sm: 5, md: 8, lg: 12.5 }}>
      <ContainerSwiper
        spaceBetween={0}
        slidesPerView='auto'
        className={SwiperStyles}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <Card
            number='01'
            title='Investigamos'
            content='Estudiamos a profundidad tu marca, los valores que tiene, las emociones  genera y
            las sensaciones que obtienen tus Clientes al comprar y usar tus productos.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='02'
            title='Analizamos'
            content='De ese análisis, salen colores, formas y  texturas que reflejan el ADN de tu marca
            y nos permiten explorar materiales para  el diseño exterior e interior de tu tienda.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='03'
            title='Creamos'
            content='Iniciamos por la parte más atractiva de la tienda;la fachada y sus vitrinas, pues
            son ellas las encargadas de llamar la atención del cliente y de invitarlo a comprar.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='04'
            title='Diseñamos el VM'
            content='Luego, de definir la localización de pasillos y zonas, diseñamos El mobiliario, la
            iluminación, la señalética y algunos exhibidores especiales.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            number='05'
            title='Diseñamos el VM'
            content='Luego, de definir la localización de pasillos y zonas, diseñamos El mobiliario, la
            iluminación, la señalética y algunos exhibidores especiales.'
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
        title='Investigamos'
        content='Estudiamos a profundidad tu marca, los valores que tiene, las emociones  genera y
        las sensaciones que obtienen tus Clientes al comprar y usar tus productos.'
      />
      <Card
        number='02'
        title='Analizamos'
        content='De ese análisis, salen colores, formas y  texturas que reflejan el ADN de tu marca
        y nos permiten explorar materiales para  el diseño exterior e interior de tu tienda.'
      />
      <Card
        number='03'
        title='Creamos'
        content='Iniciamos por la parte más atractiva de la tienda;la fachada y sus vitrinas, pues
        son ellas las encargadas de llamar la atención del cliente y de invitarlo a comprar.'
      />
      <Card
        number='04'
        title='Diseñamos el VM'
        content='Luego, de definir la localización de pasillos y zonas, diseñamos El mobiliario, la
        iluminación, la señalética y algunos exhibidores especiales.'
      />
      <Card
        number='05'
        title='Diseñamos el VM'
        content='Luego, de definir la localización de pasillos y zonas, diseñamos El mobiliario, la
            iluminación, la señalética y algunos exhibidores especiales.'
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
