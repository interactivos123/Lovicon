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
              Para diseñar tu tienda involucramos varias profesiones a la vez, la arquitectura, el
              visual merchandising y el diseño interior.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
