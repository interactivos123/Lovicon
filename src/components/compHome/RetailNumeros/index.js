import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { MyBoxBackground, Subtitle } from './styles'
import { Box, Grid } from '@material-ui/core'
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
                {/* <Grid item md={2}>
                  <LineaHorizontalBlanca />
                </Grid> */}
                <Grid item md={12}>
                  <Subtitle variant='body2' color='textSecondary'>Lovicon Retail en números</Subtitle>
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
