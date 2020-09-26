import React from 'react'
import { Box, Grid } from '@material-ui/core'
import Image from '../../image'
import { ContenedorPadre } from '../../../theme'
import { MyBoxBg, MyGridBg } from './style'
import { LinkButton } from '../../generals/Link'
import { NavigateNext } from '@material-ui/icons'

export const Imagenes = ({ img1, img2, img3 }) => {
  return (
    <MyBoxBg pt={10}>
      <ContenedorPadre>
        <MyGridBg container justify='center' alignItems='center'>

          <Grid item md={3}>
            <Box mr={2}>
              <Image name={img1} description='img1' />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box mx={1}>
              <Image name={img2} description='img2' />
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box ml={2}>
              <Image name={img3} description='img3' />
            </Box>
          </Grid>

        </MyGridBg>
      </ContenedorPadre>
      <Grid container justify='center'>
        <Box mt={5}>
          <LinkButton
            endIcon={<NavigateNext />}
            variant='outlined'
            color='primary'
            to='/contactenos/'
          >
        Construir ahora
          </LinkButton>
        </Box>
      </Grid>
    </MyBoxBg>
  )
}
