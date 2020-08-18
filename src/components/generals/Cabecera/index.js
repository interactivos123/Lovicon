import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { ContenedorPadre, LineaHorizontal , Title } from '../../../theme'
import Image from '../../image'
import { ContainerBgImage, ContainerImage } from './styles'

export const Cabecera = ({ title }) => {
  return (
    <ContainerBgImage>
      <ContenedorPadre>
        <Box pt={20} pb={5}>
          <Title variant='h1'>{title}</Title>
        </Box>
      </ContenedorPadre>
    </ContainerBgImage>
  )
}
