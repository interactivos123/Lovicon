import React from 'react'
import Image from '../../image'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import { ContenedorPadre } from '../../../theme'
import { ContainerPreguntas, Title, Question, SwiperContainer } from './styles'

SwiperCore.use([Pagination])

const CardQuestion = ({ Title, Text }) => {
  return (
    <Question>
      <h3>{Title}</h3>
      <p>{Text}</p>
    </Question>
  )
}

const SectionSeven = () => {
  return (
    <ContenedorPadre>
      <ContainerPreguntas>
        <Image name='preguntas-frecuentes.png' description='Preguntas frecuentes' />
        <Title>Preguntas frecuentes</Title>
        <section>
          <SwiperContainer
            spaceBetween={0}
            slidesPerView='auto'
            pagination={{ clickable: true }}
            className={SwiperStyles}
          >
            <SwiperSlide>
              <CardQuestion
                Title='¿Cuánto puede costar construir mi tienda?'
                Text='El costo de su proyecto depende de la complejidad de la obra, la calidad de los materiales, el tipo de acabados y por supuesto del tamaño. La clave está en mantener un equilibrio en la calidad de los materiales de obra, mobiliario e iluminación así como la fachada y avisos exteriores.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardQuestion
                Title='¿El mobiliario lo fabrican ustedes también?'
                Text='Si, lo diseñamos y fabricamos. contamos con una planta de producción en la ciudad de Bogotá donde desarrollamos productos propios y a la medida de las necesidades de cada proyecto.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardQuestion
                Title='¿Cómo es el proceso de diseño?'
                Text='Partimos de un pliego de necesidades brindadas por el cliente, es decir un brief. Nuestros diseñadores se encargan de plasmarlas en un render para luego hacerlas realidad.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardQuestion
                Title='¿Y el branding?'
                Text='Nuestro equipo de producción será el encargado de sacar adelante los requerimientos que tengas en materia de comunicación, avisos, cajas de luz, exhibidores  y especiales.'
              />
            </SwiperSlide>
          </SwiperContainer>
        </section>
      </ContainerPreguntas>
    </ContenedorPadre>
  )
}

export default SectionSeven
