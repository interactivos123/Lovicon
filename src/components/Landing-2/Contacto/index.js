import React from 'react'
import { FormRegister } from '../../../components/CompContacto/FormRegister'
import { Grid, Box } from '@material-ui/core'
import { ContainerContact, GridProject } from './styles'
import Image from '../../image'

export const Contacto = () => {
  return (
    <Box mt={{ xs: 5, md: 10, lg: 10 }}>
      <Grid container>

        <GridProject item xs={12} sm={12} md={6}>
          <Image name='1.jpg' description='Tienda Apple' />
        </GridProject>

        <Grid item xs={12} sm={12} md={6}>
          <ContainerContact>
            <FormRegister />
          </ContainerContact>
        </Grid>

      </Grid>
    </Box>
  )
}
