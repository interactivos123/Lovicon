import React from 'react'
import { Typography } from '@material-ui/core'
import { MyTypographyNumero, MyGrid } from './styles'

export const Numero = ({ number, description }) => {
  return (
    <MyGrid item>
      <MyTypographyNumero variant='subtitle1' color='textSecondary' align='center'>{number}</MyTypographyNumero>
      <Typography variant='body2' color='textSecondary' align='center'>{description}</Typography>
    </MyGrid>
  )
}
