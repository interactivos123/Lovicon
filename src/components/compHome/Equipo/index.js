import React from 'react'
import Image from '../../image'
import { ContenedorPadre } from '../../../theme'
import { Grid, Box, Typography } from '@material-ui/core'
import { MyBox, ContainerProduct, BgBox, MyGrid, TitleLine } from './style'
export const Equipo = () => {
  return (
    <BgBox>
      <ContenedorPadre>
        <Box pt={10} pb={5}>
          <MyGrid container alignItems='center'>

            <Grid item lg={6} md={12}>
              <Grid item lg={9} md={11}>
                <TitleLine variant='subtitle2'>Equipo de</TitleLine>
                <Typography variant='subtitle1'>especialistas</Typography>
                <MyBox>
                  <Typography variant='body1'>
                  Contamos con un equipo de trabajo formado por arquitectos, ingenieros, diseñadores y profesionales en
                  mercaceo que nos dan la seguridad de desarrollar proyectos comerciales de gran magnitud alcanzando los resultados trazados.
                  </Typography>
                </MyBox>
              </Grid>
            </Grid>

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
          </MyGrid>
        </Box>
      </ContenedorPadre>
    </BgBox>
  )
}
