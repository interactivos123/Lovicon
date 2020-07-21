import React from 'react'
import { ContenedorPadre, LineaHorizontalBlanca } from '../../../theme'
import { MyBoxBackground } from './styles'
import { Box, Grid, Typography } from '@material-ui/core'
import { Numero } from '../Numeros'

export const RetailNumeros = () => {
  return (
    <MyBoxBackground>
      <ContenedorPadre>
        <Box py={6}>
          <Grid container>
            <Grid item md={6} />
            <Grid item md={6}>
              <Grid container>
                <Grid item md={2}>
                  <LineaHorizontalBlanca />
                </Grid>
                <Grid item md={10}>
                  <Typography variant='body2' color='textSecondary'>Lovicon Retail en números</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box py={9}>
          <Grid container spacing={2} justify='space-around'>
            <Numero number='5' description='Años de experiencia' />
            <Numero number='8.950' description='m² construidos' />
            <Numero number='10' description='Ciudades' />
            <Numero number='+40' description='Activaciones' />
            <Numero number='7' description='Categorías' />
          </Grid>
        </Box>
      </ContenedorPadre>
    </MyBoxBackground>
  )
}
