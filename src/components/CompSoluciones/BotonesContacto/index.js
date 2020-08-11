import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { MyButton } from './styles'

export const BotonesContacto = () => {
  return (
    <Box mt={10} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <MyButton>Realiza una llamada inmediata</MyButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <MyButton>Escribe a nuestro whatsApp Bussines</MyButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <MyButton>Solicita una cotización</MyButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
