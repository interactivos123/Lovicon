import React from 'react'
import { Grid, Typography, Box, Hidden } from '@material-ui/core'
import { Indicador } from '../../generals/IndicadorPag'
import { MyColumn } from './style'
import Image from '../../image'
import { ListItem } from '../../generals/ListItem'

export const Banner = () => {
  return (
    <Box mt={12} ml={{ xs: 0, sm: 5, md: 8, lg: 20 }}>
      <Grid container>

        <Grid item xs={12} sm={6}>
          <Box my={5} mx={{ xs: 5, sm: 0 }}>
            <Indicador>Servicios/ Diseño </Indicador>
          </Box>
          <Box mb={5} mx={{ xs: 5, sm: 0 }}>
            <Typography variant='subtitle1' color='initial'>
              Diseñamos tu tienda y <br />
              todos sus elementos
            </Typography>
          </Box>
          <Hidden xsDown>
            <ListItem>Fachada</ListItem>
            <ListItem>Avisos</ListItem>
            <ListItem>Mobiliario</ListItem>
            <ListItem>Señalética</ListItem>
            <ListItem>Exhibidores</ListItem>
          </Hidden>
        </Grid>

        <MyColumn item xs={12} sm={6}>
          <Image name='banner-diseno.jpg' />
          <Hidden smUp>
            <Box my={4} mx={5}>
              <ListItem>Fachada</ListItem>
              <ListItem>Avisos</ListItem>
              <ListItem>Mobiliario</ListItem>
              <ListItem>Señaletica</ListItem>
              <ListItem>Exhibidores</ListItem>
            </Box>
          </Hidden>
        </MyColumn>
      </Grid>
    </Box>
  )
}
