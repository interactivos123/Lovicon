import React from 'react'
import { Container, Title, Text, SubtitleBanner, StyledLink, TextAnimation } from './styles'
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
                <StyledLink to='/soluciones/new-store'>
                  <ListItem><TextAnimation>Diseñar una nueva tienda</TextAnimation></ListItem>
                </StyledLink>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <StyledLink to='/soluciones/expanding-brand'>
                  <ListItem><TextAnimation>Construir una nueva tienda</TextAnimation></ListItem>
                </StyledLink>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <StyledLink to='/soluciones/storerestayling'>
                  <ListItem><TextAnimation>Renovar mi tienda</TextAnimation></ListItem>
                </StyledLink>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <StyledLink to='/soluciones/omnichannel-store'>
                  <ListItem><TextAnimation>Tienda Omnicanal</TextAnimation></ListItem>
                </StyledLink>
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
          formatos que facilitan la venta de productos y servicios en canales de venta minorista.
        </Text>
      </Grid>
    </Container>
  )
}
