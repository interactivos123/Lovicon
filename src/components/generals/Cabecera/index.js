import React from 'react'
import { Box } from '@material-ui/core'
import { ContenedorPadre, Title } from '../../../theme'
import { ContainerBgImage } from './styles'

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
