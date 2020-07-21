import React from 'react'
import { Box, Grid } from '@material-ui/core'
import Image from '../image'
import { RedesSociales } from '../RedesSociales'
import { Phone, Email, Room } from '@material-ui/icons'
import { MyContainerFooter, MyColumn1, MyContainerMenu, MyColumn2 } from './styles'
import { CajaDeIcono } from '../cajaDeIcono'
import { ListaMenu } from '../ListaMenu'
import { ContenedorPadre } from '../../theme'

const Footer = () => {
  return (
    <ContenedorPadre>
      <MyContainerFooter container direction='row'>

        <MyColumn1 item md={4}>
          <Image name='LogoLovicon.png' />
          <Box pb={2.5}>
            <RedesSociales />
          </Box>
        </MyColumn1>

        <MyColumn2 item md={4}>
          <CajaDeIcono title='Llámanos o escríbenos' description='(+2) 571 123 4560     (+57) 123 456 789' Icono={<Phone color='primary' />} />
          <CajaDeIcono title='E-mail' description='info@lovicon.com' Icono={<Email color='primary' />} />
          <CajaDeIcono title='Dirección' description='Cra. 123 No. 45A - 67 Bogotá D. C., Colombia' Icono={<Room color='primary' />} />
        </MyColumn2>

        <Grid item md={4}>
          <MyContainerMenu container direction='column'>
            <ListaMenu />
          </MyContainerMenu>
        </Grid>

      </MyContainerFooter>
    </ContenedorPadre>
  )
}

export default Footer
