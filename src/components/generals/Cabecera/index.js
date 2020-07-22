import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { ContenedorPadre, LineaHorizontal } from '../../../theme'
import Image from '../../image'
import { ContainerBgImage, ContainerImage } from './styles'

export const Cabecera = ({ title }) => {
  return (
    <ContainerBgImage>
      <ContainerImage>
        <Image name='BgCabecera.jpg' />
      </ContainerImage>
      <ContenedorPadre>
        <Box pt={20} pb={5} display='flex'>
          <LineaHorizontal />
          <Typography variant='h1'>{title}</Typography>
        </Box>
      </ContenedorPadre>
    </ContainerBgImage>
  )
}
