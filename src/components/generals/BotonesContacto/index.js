import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { MyButton } from './styles'
import { Link } from 'gatsby'

export const BotonesContacto = () => {
  return (
    <Box mt={10}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <a href='tel:3137898533' rel='noreferrer'>
              <MyButton>Realiza una llamada inmediata</MyButton>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <a href='https://wa.link/tiyq8e' target='_blank' rel='noreferrer'>
              <MyButton>Escribe a nuestro WhatsApp Business</MyButton>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <Link to='/contactenos'>
              <MyButton>Solicita una cotización</MyButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
