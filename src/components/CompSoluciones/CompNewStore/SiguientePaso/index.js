import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Title } from '../../../../theme'
import { MyButton } from './styles'

export const SiguientePaso = () => {
  return (
    <Box mt={10} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Title>¿Cuál es el siguiente paso?</Title>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Box display='flex' justifyContent='flex-end' mt={[5, 17.5]}>
            <MyButton variant='contained' color='secondary'>
              Es el momento<br />
              de construir
            </MyButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
