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
          <Subtitle variant='body2' color='textSecondary'>Lovicon Retail en números</Subtitle>
        </Box>
        <Box py={9}>
          <Grid container spacing={2} justify='space-around'>
            <Numero number='5' description='Años de experiencia' />
            <Numero number='8950' description='m² construidos' />
            <Numero number='10' description='Ciudades' />
            <Numero number='40' description='Activaciones' preNumber='+' />
            <Numero number='7' description='Categorías' />
          </Grid>
        </Box>
      </ContenedorPadre>
    </MyBoxBackground>
  )
}
