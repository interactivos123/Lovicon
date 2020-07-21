import React from 'react'
import Image from '../../image'
import { Grid, Typography, Box } from '@material-ui/core'
import { LineaHorizontal, ContenedorPadre } from '../../../theme'
import { LinkButton } from '../../generals/Link'
import { NavigateNext } from '@material-ui/icons'
import { MyTypography, MyBoxBackground } from './styles'

export const Construyendo = () => {
  return (
    <MyBoxBackground>
      <ContenedorPadre mt={15}>
        <Grid container spacing={7}>
          <Grid item md={5}>
            <Image name='construyendoTiendas.png' />
          </Grid>
          <Grid item md={7}>
            <Box mt={10}>
              <Grid container spacing={1}>
                <Grid item md={2}>
                  <LineaHorizontal />
                </Grid>
                <Grid item md={10}>
                  <Typography variant='subtitle1'>Construyendo</Typography>
                  <Typography variant='subtitle2'>las tiendas del futuro</Typography>
                  <MyTypography variant='body2'>
                    Lovicon Retail es la compañía más completa de arquitectura comercial y comunicación para puntos de venta.
                  </MyTypography>
                  <LinkButton
                    endIcon={<NavigateNext />}
                    variant='outlined'
                    color='primary'
                    to='/sobre-nosotros'
                  >
                    Nosotros
                  </LinkButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </ContenedorPadre>
    </MyBoxBackground>
  )
}
