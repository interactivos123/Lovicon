import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { MyTypography } from './style'

export const Descripcion = ({ titulo, texto }) => {
  return (
    <>
      <Box mt={8} mb={2}>
        <Typography variant='subtitle2'>{titulo}</Typography>
      </Box>
      <Box mb={5}>
        <MyTypography variant='body1'>{texto}</MyTypography>
      </Box>
    </>
  )
}
