import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { MyBoxBackground } from './styles'
import { Box, Grid } from '@material-ui/core'
import { Numero } from '../../compHome/Numeros'

const SectionFour = () => {
  return (
    <MyBoxBackground>
      <ContenedorPadre>
        <Box py={9}>
          <Grid container spacing={2} justify='space-around'>
            <Numero number='5' description='Años de experiencia' />
            <Numero number='8950' description='m² construidos' />
            <Numero number='10' description='Ciudades' />
            <Numero number='8' description='Categorías' />
          </Grid>
        </Box>
      </ContenedorPadre>
    </MyBoxBackground>
  )
}

export default SectionFour
