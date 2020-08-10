import React from 'react'
import { Container, Title, Text } from './styles'
import { Grid } from '@material-ui/core'

export const ExpandeTuMarca = () => {
  return (
    <Container container id='expande'>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Title>
          Expande tu marca
        </Title>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Text variant='p'>
          LOVICON RETAIL es la compañía más completa de arquitectura comercial y comunicación para
          puntos de venta, tiene como misión ayudar a las marcas a expandirse mediante nuevos canales
          de venta físicos. Construimos Showrooms, almacenes, franquicias, Pop Up Stores y demás
          formatos que facilitan la venta de prodcutos y servicios en canales tradicionales.
        </Text>
      </Grid>
    </Container>
  )
}
