import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { MyTypographyNumero } from './styles'

export const Numero = ({ number, description }) => {
  return (
    <Grid item>
      <MyTypographyNumero variant='subtitle1' color='textSecondary' align='center'>{number}</MyTypographyNumero>
      <Typography variant='body2' color='textSecondary'>{description}</Typography>
    </Grid>
  )
}
