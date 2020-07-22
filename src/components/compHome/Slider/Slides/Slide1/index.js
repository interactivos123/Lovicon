import React from 'react'
import { Container, Content, TextBanner } from './styles'
import Image from '../../../../image'
import { Grid, Typography } from '@material-ui/core'
import { LinkButton } from '../../../../generals/Link'
import { NavigateNext } from '@material-ui/icons'
import { LineaHorizontal } from '../../../../../theme'

export const Slide1 = () => {
  return (
    <Container container alignItems='flex-end'>
      <Content item xs={12} md={5} xl={5}>
        <Grid container>
          <Grid item md={2}>
            <LineaHorizontal />
          </Grid>
          <Grid item md={10}>
            <Typography variant='subtitle2'>La tienda física es el espacio</Typography>
            <Typography variant='subtitle1'>donde se construye el valor de la marca</Typography>
            <TextBanner variant='body2'>
              Ayudamos a las marcas a incrementar sus canales de venta físicos, construyendo tiendas espectaculares
              donde sus clientes puedan tocar, oler, sentir y probar sus productos.
            </TextBanner>
            <LinkButton
              endIcon={<NavigateNext />}
              variant='outlined'
              color='primary'
            >
            Arquitectura
            </LinkButton>
          </Grid>
        </Grid>
      </Content>
      <Grid item xs={12} md={7} xl={7}>
        <Image name='imageBanner1.png' />
      </Grid>
    </Container>
  )
}
