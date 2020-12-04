import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import Image from '../../image'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
// import { StepOne, StepTwo, StepThree } from '../../../illustrations'
import StepOne from '../../../images/StepOne.svg'
import StepTwo from '../../../images/StepTwo.png'
import StepThree from '../../../images/StepThree.svg'
import { ContenedorPadre } from '../../../theme'

import { ContainerSectionThree, Title, Button, ContainerBorderStep, ContainerStep, TitleStep, TextStep, SwiperContainer } from './styles'

SwiperCore.use([Navigation])

const CardStep = ({ Illustration, Title, Text }) => {
  return (
    <ContainerBorderStep>
      <ContainerStep>
        <img src={Illustration} />
        <TitleStep>
          {Title}
        </TitleStep>
        <TextStep>
          {Text}
        </TextStep>
      </ContainerStep>
    </ContainerBorderStep>
  )
}

const SectionThree = () => {
  return (
    <ContenedorPadre>
      <ContainerSectionThree>
        <Title>
          Cotice ahora mismo <b>en 3 pasos</b>
        </Title>
        <SwiperContainer
          spaceBetween={0}
          slidesPerView='auto'
          navigation
          className={SwiperStyles}
        >
          <SwiperSlide>
            <CardStep
              Illustration={StepOne}
              Title='1. Contáctenos'
              Text='Llámenos o déjenos sus datos y le llamamos en solo un momento.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardStep
              Illustration={StepTwo}
              Title='2. Lo asesoramos'
              Text='Uno de nuestros profesionales será el encargado de guiarlo en el requerimiento para su tienda.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardStep
              Illustration={StepThree}
              Title='3. Lo visitamos'
              Text='Facilmente, visitamos su local con una cita programada.'
            />
          </SwiperSlide>
        </SwiperContainer>
        <Button>
          QUIERO COTIZAR
        </Button>
      </ContainerSectionThree>
    </ContenedorPadre>
  )
}

export default SectionThree
