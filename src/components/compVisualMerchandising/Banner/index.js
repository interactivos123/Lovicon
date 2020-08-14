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
            <Indicador>Servicios/ Visual Merchandising </Indicador>
          </Box>
          <Box mb={5} mx={{ xs: 5, sm: 0 }}>
            <Typography variant='subtitle1' color='initial'>
              Diseñamos el plan <br />
              de merchandising <br />
              de tu tienda
            </Typography>
          </Box>
          <Hidden xsDown>
            <ListItem>Gestión del surtido</ListItem>
            <ListItem>Localización del producto</ListItem>
            <ListItem>Presentación del producto</ListItem>
            <ListItem>Comunicación</ListItem>
          </Hidden>
        </Grid>

        <MyColumn item xs={12} sm={6}>
          <Image name='banner-visual.jpg' />
          <Hidden smUp>
            <Box my={4} mx={5}>
              <ListItem>Gestión del surtido</ListItem>
              <ListItem>Localización del producto</ListItem>
              <ListItem>Presentación del producto</ListItem>
              <ListItem>Comunicación</ListItem>
            </Box>
          </Hidden>
        </MyColumn>
      </Grid>
    </Box>
  )
}
