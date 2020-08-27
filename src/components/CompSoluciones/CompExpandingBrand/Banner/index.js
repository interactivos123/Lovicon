import React from 'react'
import { Link } from 'gatsby'
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
            <Indicador>Soluciones / Expanding Brand</Indicador>
          </Box>
          <Box mb={5} mx={{ xs: 2.5, sm: 0 }}>
            <Typography variant='subtitle1' color='initial'>
              Construimos tu<br />
              tienda física
            </Typography>
          </Box>
          <Hidden xsDown>
            <Box mt={10} mr={10}>
              <Typography variant='p'>
                Si vas a construir una nueva tienda para tu marca significa que:<br />
                1. Tu marca se encuentra en expansión y quieres aumentar tus canales de venta físicos ubicando tu tienda de forma estratégica y cercana a tu segmento de mercado. Ya tienes varias tiendas con un formato exitoso y necesitas replicarlo. Ó<br />
                2. Cuentas con el diseño de la tienda y requieres de  una firma que se encargue de volverlo realidad, es decir construirlo.<br />
              </Typography>
            </Box>
            <Box mt={2.5} mr={10}>
              <Typography varian='p'>
                <Link to='/soluciones/new-store'>
                  Si aún no cuentas con el diseño de tu tienda puedes revisar el paquete "new Store"
                </Link>
              </Typography>
            </Box>
          </Hidden>
        </Grid>

        <MyColumn item xs={12} sm={5}>
          <Image name='Img-Expanding-Brand.jpg' />
          <Hidden smUp>
            <Box my={4} mx={2.5}>
              <Box mt={10}>
                <Typography variant='p'>
                  Si vas a construir una nueva tienda para tu marca significa que:<br />
                  1. Tu marca se encuentra en expansión y quieres aumentar tus canales de venta físicos ubicando tu tienda de forma estratégica y cercana a tu segmento de mercado. Ya tienes varias tiendas con un formato exitoso y necesitas replicarlo. Ó<br />
                  2. Cuentas con el diseño de la tienda y requieres de  una firma que se encargue de volverlo realidad, es decir construirlo.<br />
                </Typography>
              </Box>
              <Box mt={2.5}>
                <Typography variant='p'>
                  <Link to='/soluciones/new-store'>
                    Si aún no cuentas con el diseño de tu tienda puedes revisar el paquete “new Store”
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Hidden>
        </MyColumn>
      </Grid>
    </Box>
  )
}
