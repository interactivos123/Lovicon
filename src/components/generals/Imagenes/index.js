import React from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'
import Image from '../../image'
import { MyGridExt, MyGridCenter } from './style'

export const Imagenes = ({ img1, img2, img3 }) => {
  return (
    <>
      <Hidden smDown>
        <Grid container justify='center' alignItems='center'>

          <MyGridExt item>
            <Box mr={2}>
              <Image name={img1} />
            </Box>
          </MyGridExt>
          <MyGridCenter item>
            <Box mx={1}>
              <Image name={img2} />
            </Box>
          </MyGridCenter>
          <MyGridExt item>
            <Box ml={2}>
              <Image name={img3} />
            </Box>
          </MyGridExt>

        </Grid>
      </Hidden>
    </>
  )
}
