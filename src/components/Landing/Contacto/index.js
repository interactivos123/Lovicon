import React from 'react'
import { FormRegister } from '../../../components/CompContacto/FormRegister'
import { ContenedorPadre } from '../../../theme'
import { Grid } from '@material-ui/core'
import { MyTitle, ContainerContact, MyButton, GridProject } from './styles'

export const Contacto = () => {
  return (
    <ContenedorPadre my={{ xs: 10, md: 16, lg: 20 }}>
      <Grid container alignItems='flex-end'>
        <Grid item xs={12} sm={7}>
          <ContainerContact>
            <MyTitle>Ponte en contacto con nosotros</MyTitle>
            <FormRegister />
          </ContainerContact>
        </Grid>
        <GridProject item xs={12} sm={5}>
          <MyButton variant='contained' color='secondary'>
            Ver Proyectos
          </MyButton>
        </GridProject>
      </Grid>
    </ContenedorPadre>
  )
}
