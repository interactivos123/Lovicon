import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { Title } from '../../../../theme'

export const Como = () => {
  return (
    <Box my={5} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Title>
            ¿Cómo lo hacemos?
          </Title>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box mt={[5, 5, 15]}>
            <Typography variant='p'>
              Para construir tu tienda involucramos profesionales en arquitectura, diseño industrial,
              diseño de interiores, ingenieros civiles y eléctricos además del personal de obra.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
