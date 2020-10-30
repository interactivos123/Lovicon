import React from 'react'
import { Grid } from '@material-ui/core'
import { ContainerGrid } from './styles'
import Image from '../../image'
import { ContenedorPadre } from '../../../theme'

export const Logos = () => {
  return (
    <ContenedorPadre mt={{ xs: 3, md: 4, lg: 6 }}>
      <ContainerGrid container alignItems='center'>
        <Grid item xs={12} sm={6} md>
          <Image name='KIA.png' description='Kia' />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Image name='MAC.png' description='Mac' />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Image name='BBC.jpg' description='BBC' />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Image name='JAC.png' description='JAC' />
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Image name='CHUCKE.png' description='Chucke Cheese' />
        </Grid>
      </ContainerGrid>
    </ContenedorPadre>
  )
}
