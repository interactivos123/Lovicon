import React from 'react'
import { Link } from 'gatsby'
import Image from '../../image'
import { ContenedorPadre } from '../../../theme'
import { SwipeDown } from '../../icons'
import { StyledSectionOne, ContainerBackgroundImage, Container, ColumnLeft, ContainerLogo, Title, CallToAction, ColumnRight } from './styles'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const SectionOne = () => {
  return (
    <StyledSectionOne>
      <ContenedorPadre>
        <Container>
          <ColumnLeft>
            <ContainerLogo>
              <Link to='/'>
                <Image name='LogoLovicon.png' description='Logo Lovicon' />
              </Link>
            </ContainerLogo>
            <Title>
              CONSTRUIMOS TIENDAS <b>FLEXIBLES</b> Y <b>ADAPTABLES</b>.
              <strong>OPTIMIZADAS A LOS NUEVOS HÁBITOS  DE COMPRA</strong>
            </Title>
            <CallToAction>
              <AnchorLink to='/landing/#construir-tienda'>
                Quiero cotizar
              </AnchorLink>
              <AnchorLink to='/landing/#construir-tienda'>
                <SwipeDown />
              </AnchorLink>
            </CallToAction>
          </ColumnLeft>
          <ColumnRight />
        </Container>
      </ContenedorPadre>
      <ContainerBackgroundImage>
        <Image name='1.jpg' />
      </ContainerBackgroundImage>
    </StyledSectionOne>
  )
}

export default SectionOne
