import React from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'
import { ModalImagen } from '../ModalImagen'
import { MyGridExt, MyGridCenter } from './style'

export const Imagenes = ({ img1, img2, img3 }) => {
  return (
    <>
      <Hidden smDown>
        <Grid container justify='center' alignItems='center'>

          <MyGridExt item>
            <Box mr={2}>
              <ModalImagen name={img1} />
            </Box>
          </MyGridExt>
          <MyGridCenter item>
            <Box mx={1}>
              <ModalImagen name={img2} />
            </Box>
          </MyGridCenter>
          <MyGridExt item>
            <Box ml={2}>
              <ModalImagen name={img3} />
            </Box>
          </MyGridExt>

        </Grid>
      </Hidden>
    </>
  )
}
