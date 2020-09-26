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
            <Indicador>Soluciones / Omnichannel Store</Indicador>
          </Box>
          <Box mb={5} mx={{ xs: 2.5, sm: 0 }}>
            <Typography variant='subtitle1' color='initial'>
              Acercamos tu marca<br />
              a la omnicanalidad
            </Typography>
          </Box>
          <Hidden xsDown>
            <Box mt={10} mr={10}>
              <Typography variant='p'>
                Si bien la Omnicanalidad está asociada generalmente a software y tecnología, la tienda
                física desempeña un papel fundamental para lograr que el cliente experimente una
                interacción homogénea. Lovicon Retail presenta una solución basada en la
                reconfiguración del espacio donde la marca puede ofrecer una experiencia física
                aumentada digitalmente.
              </Typography>
            </Box>
          </Hidden>
        </Grid>

        <MyColumn item xs={12} sm={5}>
          <Image name='Img-OmniChannelStore.jpg' description='OmniChannelStore' />
          <Hidden smUp>
            <Box my={4} mx={2.5}>
              <Box mt={10}>
                <Typography variant='p'>
                  Si bien la Omnicanalidad está asociada generalmente a software y tecnología, la tienda
                  física desempeña un papel fundamental para lograr que el cliente experimente una
                  interacción homogénea. Lovicon Retail presenta una solución basada en la
                  reconfiguración del espacio donde la marca puede ofrecer una experiencia física
                  aumentada digitalmente.
                </Typography>
              </Box>
            </Box>
          </Hidden>
        </MyColumn>
      </Grid>
    </Box>
  )
}
