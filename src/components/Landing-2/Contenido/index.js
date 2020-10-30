import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid, Box } from '@material-ui/core'
import { MyTitle, Bloque, TitleGrid, MyTypography, MyButton } from './styles'

export const Contenido = () => {
  return (
    <ContenedorPadre my={{ xs: 10, md: 12 }}>
      <MyTitle>Ahorra tiempo y dinero. Contrata un solo aliado estratégico</MyTitle>
      <Grid container alignItems='center'>
        <Grid item xs={12} sm={6} md={3}>
          <Bloque />
          <TitleGrid>Conceptualización de la tienda</TitleGrid>
          <MyTypography variant='body1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </MyTypography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Bloque />
          <TitleGrid>Diseño de la tienda </TitleGrid>
          <MyTypography variant='body1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </MyTypography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Bloque />
          <TitleGrid>Fabricación de mobiiario</TitleGrid>
          <MyTypography variant='body1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </MyTypography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Bloque />
          <TitleGrid>Construcción de la tienda</TitleGrid>
          <MyTypography variant='body1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </MyTypography>
        </Grid>
      </Grid>

      <Box mt={{ xs: 4, md: 8 }} textAlign='center'>
        <MyButton variant='contained' color='secondary'>
            Ver Proyectos
        </MyButton>
      </Box>
    </ContenedorPadre>
  )
}
