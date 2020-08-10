import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import { GridImage } from './styles'
import Image from '../../../image'

export const Slide1 = () => {
  return (
    <Grid container>
      <GridImage item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Image name='ImageSoluciones.png' />
      </GridImage>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
        <Box mt={[5, 10]}>
          <Typography variant='p'>
            Ideal para marcas nuevas que van a construir su primer punto de venta físico.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
