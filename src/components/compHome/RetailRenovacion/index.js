import React from 'react'
import { ContenedorPadre, LineaHorizontal } from '../../../theme'
import { Grid, Typography } from '@material-ui/core'

export const RetailRenovacion = () => {
  return (
    <ContenedorPadre my={10}>
      <Grid container spacing={1}>
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={2}>
              <LineaHorizontal />
            </Grid>
            <Grid item md={10}>
              <Typography variant='subtitle1'>Construyendo</Typography>
              <Typography variant='subtitle2'>las tiendas del futuro</Typography>
              <Typography variant='body2'>
                    Lovicon Retail es la compañía más completa de arquitectura comercial y comunicación para puntos de venta.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} />
      </Grid>
    </ContenedorPadre>
  )
}
