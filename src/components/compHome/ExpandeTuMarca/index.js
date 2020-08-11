import React from 'react'
import { Container, Title, Text, SubtitleBanner } from './styles'
import { ListItem } from '../../generals/ListItem'
import { Grid, Hidden, Box } from '@material-ui/core'

export const ExpandeTuMarca = () => {
  return (
    <Container container id='expande'>
      <Hidden smUp>
        <Box mb={12.5}>
          <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
            <SubtitleBanner>¿Qué necesita tu marca para crecer?</SubtitleBanner>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <ListItem>Diseñar una nueva tienda</ListItem>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <ListItem>Construir una nueva tienda</ListItem>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <ListItem> Renovar mi tienda</ListItem>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <ListItem>Tienda Omnicanal</ListItem>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Hidden>
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
