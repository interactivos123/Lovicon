import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid } from '@material-ui/core'
import Image from '../../image'
import { MyTitle, GridLogos } from './styles'

export const TituloLogos = () => {
  return (
    <ContenedorPadre mt={{ xs: 12 }}>
      <Grid container alignItems='flex-end' spacing={{ xs: 18, md: 5, lg: 10 }}>

        <Grid item xs={12} sm={12} md={7}>
          <MyTitle variant='h1'>Más de 8.000 m2  de espacio comercial construido en toda Colombia para grandes marcas.</MyTitle>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <GridLogos container alignItems='center'>
            <Grid item xs={12} sm={6}>
              <Image name='KIA.png' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image name='MAC.png' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image name='BBC.jpg' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Image name='JAC.png' />
            </Grid>
          </GridLogos>
        </Grid>
      </Grid>
    </ContenedorPadre>
  )
}
