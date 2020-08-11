import React from 'react'
import { Grid, Typography, Hidden } from '@material-ui/core'
import { Container, TitleBanner, SubtitleBanner } from './styles'
import { ListItem } from '../../../../generals/ListItem'
export const Slide1 = () => {
  return (
    <Container container alignItems='center'>
      <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
        <Typography variant='h6'>
          Arquitectura, diseño y gestión<br />
          de tiendas físicas
        </Typography>
        <TitleBanner>
          Ayudamos a las marcas a
          crecer, construyendo
          tiendas físicas en
          múltiples formatos.
        </TitleBanner>
      </Grid>
      <Hidden xsDown>
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
      </Hidden>
    </Container>
  )
}
