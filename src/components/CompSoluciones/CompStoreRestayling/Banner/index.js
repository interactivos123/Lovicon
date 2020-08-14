import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography, Box, Hidden } from '@material-ui/core'
import { Indicador } from '../../../generals/IndicadorPag'
import { MyColumn } from './styles'
import Image from '../../../image'

export const Banner = () => {
  return (
    <Box mt={12} ml={{ xs: 0, sm: 5, md: 8, lg: 12.5 }}>
      <Grid container>

        <Grid item xs={12} sm={7}>
          <Box my={5} mx={{ xs: 2.5, sm: 0 }}>
            <Indicador>Soluciones / Store Restyling</Indicador>
          </Box>
          <Box mb={5} mx={{ xs: 2.5, sm: 0 }}>
            <Typography variant='subtitle1' color='initial'>
              Remodelamos tu<br />
              tienda física
            </Typography>
          </Box>
          <Hidden xsDown>
            <Box mt={10} mr={10}>
              <Typography variant='p'>
                Este paquete de soluciones es ideal para marcas que buscan transformarse. Marcas que
                actualmente tienen un formato de tienda desactualizado y quieren mantenerse y seguir
                creciendo en el mercado. Básicamente lo que hacemos es una reconfiguración del espacio
                comercial, modificando divisiones, zonas, pasillos, iluminación y mobiliario.
              </Typography>
            </Box>
            <Box mt={2.5} mr={10}>
              <Typography>
                <Link to='/soluciones/new-store'>
                  Si tu tienda necesita un diseño completamente nuevo visita la solución “New Store Now”
                </Link>
              </Typography>
            </Box>
          </Hidden>
        </Grid>

        <MyColumn item xs={12} sm={5}>
          <Image name='Img-StoreRestyling.jpg' />
          <Hidden smUp>
            <Box my={4} mx={2.5}>
              <Box mt={10}>
                <Typography variant='p'>
                  Este paquete de soluciones es ideal para marcas que buscan transformarse. Marcas que
                  actualmente tienen un formato de tienda desactualizado y quieren mantenerse y seguir
                  creciendo en el mercado. Básicamente lo que hacemos es una reconfiguración del espacio
                  comercial, modificando divisiones, zonas, pasillos, iluminación y mobiliario.
                </Typography>
              </Box>
              <Box mt={2.5}>
                <Typography>
                  <Link to='/soluciones/new-store'>
                    Si tu tienda necesita un diseño completamente nuevo visita la solución “New Store Now”
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
