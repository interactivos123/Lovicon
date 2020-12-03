import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { ContainerBg, Title, TwoColumns, Marcas, BoxIcons } from './styles'
import Image from '../../image'
import { Construccion, Iluminacion, Cableado, Mobiliario } from '../../../icons'

const SectionTwo = () => {
  return (
    <ContainerBg>
      <ContenedorPadre>

        <Title><b>Diseñamos y construimos locales comerciales para grandes marcas, </b><span> y para pequeñas grandes marcas</span></Title>

        <TwoColumns>
          <Marcas>
            <section>
              <div className='images'>
                <Image name='BBC.jpg' description='BBC' />
                <Image name='Capones-blanco.png' description='Capones' />
                <Image name='CHUCKE.png' description='Chuckle Cheese' />
              </div>
              <div className='images'>
                <Image name='Cortesana2.jpg' description='Cortesana' />
                <Image name='JAC.png' description='JAC' />
                <Image name='KIA.png' description='KIA' />
              </div>
              <div className='images50'>
                <Image name='mac-blanco.png' description='Mac center' />
                <Image name='Proarca-blanco.png' description='Proarca' />
              </div>
            </section>
          </Marcas>
          <BoxIcons>
            <h3>Deje su proyecto en manos de<span> un solo aliado estratégico</span></h3>
            <section>
              <div>
                <Construccion />
                <h4>Construcción</h4>
              </div>
              <div>
                <Iluminacion />
                <h4>Iluminación</h4>
              </div>
              <div>
                <Cableado />
                <h4>Cableado <br /> estructurado</h4>
              </div>
              <div>
                <Mobiliario />
                <h4>Mobiliario</h4>
              </div>
            </section>
          </BoxIcons>
        </TwoColumns>

      </ContenedorPadre>
    </ContainerBg>
  )
}

export default SectionTwo
