import React from 'react'
import { ContenedorPadre, LineaHorizontal } from '../../../theme'
import { Grid, Typography, Box } from '@material-ui/core'
import { MyTypography, MyGreenBgFigure, MyRedBgFigure } from './styles'

export const RetailRenovacion = () => {
  return (
    <MyRedBgFigure>
      <ContenedorPadre my={10}>
        <Grid container spacing={10} alignItems='center'>

          <MyGreenBgFigure xs={12} item md={6}>
            <Grid container spacing={1}>

              <Grid item xs={1} md={4}>
                <LineaHorizontal />
              </Grid>

              <Grid item xs={11} md={8}>
                <Typography variant='subtitle2'>El retail en constante</Typography>
                <Typography variant='subtitle1'>renovación</Typography>
                <MyTypography variant='body1'>
                  El mundo del retail se transforma constantemente, es más rápido y versátil. Ayudamos a nuestros clientes a entregar
                  sus productos a través del mejor punto de venta, con un diseño increíble y las mejores estrategias de comunicación dentro de él.
                </MyTypography>
              </Grid>

            </Grid>
          </MyGreenBgFigure>

          <Grid item xs={12} md={6}>
            <Typography variant='subtitle2'>Equipo de especialistas</Typography>
            <MyTypography variant='body1'>
              Contamos con un equipo de arquitectos, ingenieros, diseñadores y mercadólogos que nos dan la seguridad de
              desarrollar proyectos comerciales de gran magnitud.
            </MyTypography>
            <Box pt={10}>
              <Typography variant='subtitle2'>Innovación</Typography>
              <MyTypography variant='body1'>
                Estamos en constante capacitación para aplicar materiales de últimas tendencias, ecológicos y sostenibles
                que generen valor agregado al proyecto.
              </MyTypography>
            </Box>
          </Grid>
        </Grid>
      </ContenedorPadre>
    </MyRedBgFigure>
  )
}
