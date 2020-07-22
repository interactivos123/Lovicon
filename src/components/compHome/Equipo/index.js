import React from 'react'
import Image from '../../image'
import { ContenedorPadre, LineaHorizontal } from '../../../theme'
import { Grid, Box, Typography } from '@material-ui/core'
import { MyBox, ContainerProduct, GridColumn1 } from './style'
export const Equipo = () => {
  return (
    <ContenedorPadre>
      <Box my={15}>
        <Grid container alignItems='center'>

          <GridColumn1 item lg={6} md={12}>
            <Grid container>

              <Grid lg={3} md={1}>
                <LineaHorizontal />
              </Grid>

              <Grid lg={9} md={11}>
                <Typography variant='subtitle2'>Equipo de</Typography>
                <Typography variant='subtitle1'>especialistas</Typography>
                <MyBox>
                  <Typography variant='body1'>
                  Contamos con un equipo de trabajo formado por arquitectos, ingenieros, diseñadores y profesionales en
                  mercaceo que nos dan la seguridad de desarrollar proyectos comerciales de gran magnitud alcanzando los resultados trazados.
                  </Typography>
                </MyBox>
              </Grid>

            </Grid>
          </GridColumn1>

          <Grid item lg={6} md={12}>

            <Grid container justify='space-around'>

              <Grid item lg={4} md={2}>
                <ContainerProduct>
                  <Image name='hombre-feliz-2.jpg' />
                  <Typography variant='h4' align='center'>Mario Lopez</Typography>
                  <Typography variant='body2' align='center'>Director de Obras</Typography>
                </ContainerProduct>
              </Grid>
              <Grid item lg={4} md={2}>
                <ContainerProduct>
                  <Image name='hombre-feliz-2.jpg' />
                  <Typography variant='h4' align='center'>Sergio Parra</Typography>
                  <Typography variant='body2' align='center'>Director de Obras</Typography>
                </ContainerProduct>
              </Grid>
              <Grid item lg={4} md={2}>
                <ContainerProduct>
                  <Image name='persona-feliz.jpg' />
                  <Typography variant='h4' align='center'>Laura Zambrano</Typography>
                  <Typography variant='body2' align='center'>Diseñadora</Typography>
                </ContainerProduct>
              </Grid>

              <Grid item lg={6} md={2}>
                <Box ml={{ md: 0, lg: 4 }}>
                  <ContainerProduct>
                    <Image name='hombre-feliz-2.jpg' />
                    <Typography variant='h4' align='center'>Sebastian Lopez</Typography>
                    <Typography variant='body2' align='center'>Director de Obras</Typography>
                  </ContainerProduct>
                </Box>
              </Grid>
              <Grid item lg={6} md={2}>
                <Box mr={{ md: 0, lg: 4 }}>
                  <ContainerProduct>
                    <Image name='persona-feliz.jpg' />
                    <Typography variant='h4' align='center'>Lizeth Rincón</Typography>
                    <Typography variant='body2' align='center'>Director de Obras</Typography>
                  </ContainerProduct>
                </Box>
              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </Box>
    </ContenedorPadre>
  )
}
