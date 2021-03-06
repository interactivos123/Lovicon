import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import { Container, TitleBanner, SubtitleBanner, TextAnimation, TitlePage } from './styles'
import { ListItem } from '../../../../generals/ListItem'
import { Link } from 'gatsby'
export const Slide1 = () => {
  return (
    <Container container alignItems='center'>
      <Grid item xs={12} sm={7} md={8} lg={8} xl={8}>
        <TitlePage>
          Arquitectura, diseño y gestión<br />
          de tiendas físicas
        </TitlePage>
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
              <Link to='/soluciones/new-store/'>
                <ListItem>
                  <TextAnimation>
                    Diseñar una nueva tienda
                  </TextAnimation>
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Link to='/soluciones/expanding-brand/'>
                <ListItem>
                  <TextAnimation>
                    Construir una nueva tienda
                  </TextAnimation>
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Link to='/soluciones/storerestayling/'>
                <ListItem>
                  <TextAnimation>
                    Renovar mi tienda
                  </TextAnimation>
                </ListItem>
              </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Link to='/soluciones/omnichannel-store/'>
                <ListItem>
                  <TextAnimation>
                    Tienda Omnicanal
                  </TextAnimation>
                </ListItem>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Container>
  )
}
