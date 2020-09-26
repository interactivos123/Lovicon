import React from 'react'
import { Grid, Typography, Box, Hidden } from '@material-ui/core'
import { Indicador } from '../../../generals/IndicadorPag'
import { MyColumn } from './styles'
import Image from '../../../image'

export const Banner = () => {
  return (
    <Box mt={12} ml={{ xs: 0, sm: 5, md: 8, lg: 20 }}>
      <Grid container>

        <Grid item xs={12} sm={7}>
          <Box my={5} mx={{ xs: 2.5, sm: 0 }}>
            <Indicador>Soluciones / New Store</Indicador>
          </Box>
          <Box mb={5} mx={{ xs: 2.5, sm: 0 }}>
            <Typography variant='subtitle1' color='initial'>
              Diseñamos el espacio<br />
              ideal para que tus<br />
              clientes se vinculen<br />
              con tu marca
            </Typography>
          </Box>
          <Hidden xsDown>
            <Box mt={10} mr={10}>
              <Typography variant='p'>
                Si quieres diseñar una nueva tienda para tu marca significa que: <br />
                1. Cuentas con un portafolio de productos establecido y quieres tener una relación más directa con tus clientes en un espacio físico en el que pueden comprar y experimentar lo que ofreces. Ó<br />
                2. Ya tienes una tienda física pero descubriste que tiene un formato desactualizado, no estás vendiendo lo suficiente ó estás perdiendo clientes.<br />
              </Typography>
            </Box>
          </Hidden>
        </Grid>

        <MyColumn item xs={12} sm={5}>
          <Image name='Img-ExpandingBrand.jpg' description='Expanding Brand' />
          <Hidden smUp>
            <Box my={4} mx={2.5}>
              <Box mt={10}>
                <Typography variant='p'>
                  Si quieres diseñar una nueva tienda para tu marca significa que: <br />
                  1. Cuentas con un portafolio de productos establecido y quieres tener una relación más directa con tus clientes en un espacio físico en el que pueden comprar y experimentar lo que ofreces. Ó<br />
                  2. Ya tienes una tienda física pero descubriste que tiene un formato desactualizado, no estás vendiendo lo suficiente ó estás perdiendo clientes.<br />
                </Typography>
              </Box>
            </Box>
          </Hidden>
        </MyColumn>
      </Grid>
    </Box>
  )
}
