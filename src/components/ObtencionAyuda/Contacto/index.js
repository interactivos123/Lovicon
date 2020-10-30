import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid, Typography } from '@material-ui/core'

export const Contacto = () => {
  return (
    <ContenedorPadre my={{ xs: 5, lg: 10 }}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Typography variant='body2'>
            Hable con un especialista en ventas de Lovicon para obtener respuestas a las preguntas que pueda tener si está evaluando construir    una    nueva tienda, comenzando su primer proyecto o renovando su local.
            Los especialistas en ventas proporcionan:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} />
      </Grid>
    </ContenedorPadre>
  )
}
