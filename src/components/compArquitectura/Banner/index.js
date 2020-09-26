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
            <Indicador>Servicios/ Arquitectura y construcción</Indicador>
          </Box>
          <Box mb={5} mx={{ xs: 5, sm: 0 }}>
            <Typography variant='subtitle1' color='initial'>
              Construimos múltiples<br />
              formatos de tiendas<br />
              físicas
            </Typography>
          </Box>
          <Hidden xsDown>
            <ListItem>Showrooms</ListItem>
            <ListItem>Almacenes</ListItem>
            <ListItem>Shop in Shops</ListItem>
            <ListItem>Franquicias</ListItem>
            <ListItem>Outlets</ListItem>
            <ListItem>Pop Up Stores</ListItem>
            <ListItem>Flag Ship Stores</ListItem>
            <ListItem>Concept Stores</ListItem>
          </Hidden>
        </Grid>

        <MyColumn item xs={12} sm={6}>
          <Image name='ArquitecturaConstruccion.png' description='Arquitectura y construcción' />
          <Hidden smUp>
            <Box my={4} mx={5}>
              <ListItem>Showrooms</ListItem>
              <ListItem>Almacenes</ListItem>
              <ListItem>Shop in Shops</ListItem>
              <ListItem>Franquicias</ListItem>
              <ListItem>Outlets</ListItem>
              <ListItem>Pop Up Stores</ListItem>
              <ListItem>Flag Ship Stores</ListItem>
              <ListItem>Concept Stores</ListItem>
            </Box>
          </Hidden>
        </MyColumn>
      </Grid>
    </Box>
  )
}
