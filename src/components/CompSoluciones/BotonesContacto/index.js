import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { MyButton, StyledLink, Anchor } from './styles'

export const BotonesContacto = () => {
  return (
    <Box mt={10} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <Anchor href='tel:3137898533'>
              <MyButton>Realiza una llamada inmediata</MyButton>
            </Anchor>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <Anchor href='https://wa.link/tiyq8e' target='_blank'>
              <MyButton>Escribe a nuestro WhatsApp Business</MyButton>
            </Anchor>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box my={[1.25, 1.25, 0]} height='100%'>
            <StyledLink to='/contactenos'>
              <MyButton>Solicita una cotización</MyButton>
            </StyledLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
