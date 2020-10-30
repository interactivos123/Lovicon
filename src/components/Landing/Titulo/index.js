import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { MyTitle, ContainerTitle, MyDescription } from './styles'
// import { Typography } from '@material-ui/core'

export const Titulo = () => {
  return (
    <ContenedorPadre mt={{ xs: 18, md: 18 }}>
      <ContainerTitle>
        <MyTitle variant='h1' align='center'>Construye tus tiendas con Lovicon</MyTitle>
        <MyDescription variant='h3' align='center'>
          Más de 8.000 m2  de espacio comercial construido en toda Colombia para grandes marcas.
        </MyDescription>
      </ContainerTitle>
    </ContenedorPadre>
  )
}
