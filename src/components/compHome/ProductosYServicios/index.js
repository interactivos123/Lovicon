import React from 'react'
import { ContenedorPadre, LineaHorizontal } from '../../../theme'
import { Grid, Typography, Box } from '@material-ui/core'
import { ContainerProduct, ContainerProudctosYServicios, MyButton } from './style'
import { NavigateNext } from '@material-ui/icons'
import Image from '../../image'

export const ProductosYServicios = () => {
  return (
    <ContainerProudctosYServicios pt={25} mt={-22}>
      <ContenedorPadre>
        <Grid container>

          <Grid item md={4}>
            <Grid container spacing={1}>

              <Grid item md={4}>
                <LineaHorizontal />
              </Grid>

              <Grid item md={8}>
                <Typography variant='subtitle2'>Productos y</Typography>
                <Typography variant='subtitle1'>servicios</Typography>
                <Box mt={5}>
                  <MyButton>
                    <NavigateNext fontSize='large' />
                  </MyButton>
                </Box>
              </Grid>

            </Grid>
          </Grid>

          <Grid item md={8}>
            <Grid container justify='space-around'>

              <Grid item md={3}>
                <ContainerProduct>
                  <Image name='arquitectura.png' />
                  <Typography variant='h4' align='center'>Arquitectura y construcción</Typography>
                </ContainerProduct>
              </Grid>
              <Grid item md={3}>
                <ContainerProduct>
                  <Image name='IconDiseno.png' />
                  <Typography variant='h4' align='center'>Diseño</Typography>
                </ContainerProduct>
              </Grid>
              <Grid item md={3}>
                <ContainerProduct>
                  <Image name='IconMobiliario.png' />
                  <Typography variant='h4' align='center'>Mobiliario</Typography>
                </ContainerProduct>
              </Grid>
              <Grid item md={3}>
                <ContainerProduct>
                  <Image name='IconVisual.png' />
                  <Typography variant='h4' align='center'>Visual Merchandising</Typography>
                </ContainerProduct>
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </ContenedorPadre>
    </ContainerProudctosYServicios>
  )
}
