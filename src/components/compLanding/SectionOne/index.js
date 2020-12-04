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
              EL <b>86%</b> DE LAS <b>VENTAS</b> DE LOS COMERCIOS SIGUEN REALIZANDOSE EN LA <b>TIENDA FÍSICA</b>
            </Title>
            <CallToAction>
              <AnchorLink to='/landing/#construir-tienda'>
                Construya <br /> su tienda ahora
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
        <Image name='ImageSectionOneLanding.jpg' />
      </ContainerBackgroundImage>
    </StyledSectionOne>
  )
}

export default SectionOne
