import React from 'react'
import { Box, Grid } from '@material-ui/core'
import Image from '../../image'

export const Imagenes = ({ img1, img2, img3 }) => {
  return (
    <Box mt={10}>
      <Grid container spacing={3} justify='center'>

        <Grid item md={3}>
          <Image name={img1} />
        </Grid>
        <Grid item md={3}>
          <Image name={img2} />
        </Grid>
        <Grid item md={3}>
          <Image name={img3} />
        </Grid>

      </Grid>
    </Box>
  )
}
