import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import Image from '../image'
import { RedesSociales } from '../RedesSociales'
import { Phone, Email, Room } from '@material-ui/icons'
import { CajaDeIcono } from '../cajaDeIcono'
import { ContenedorPadre } from '../../theme'
import { MyContainerFooter, MyColumn1, MyContainerMenu, MyColumn2, MyLinkTerminos, MyContainerColombia } from './styles'
import loadable from '@loadable/component'
const ListaMenu = loadable(() => import('../ListaMenu'))

const Footer = () => {
  return (
    <ContenedorPadre>
      <MyContainerFooter container direction='row'>

        <MyColumn1 item md={4}>
          <Image name='LogoLovicon.png' />
          <Box>
            <RedesSociales />
          </Box>
        </MyColumn1>

        <MyColumn2 item md={5}>
          <CajaDeIcono title='Llámanos o escríbenos' description='(+2) 571 123 4560     (+57) 123 456 789' Icono={<Phone color='primary' />} />
          <CajaDeIcono title='E-mail' description='info@lovicon.com' Icono={<Email color='primary' />} />
          <CajaDeIcono title='Dirección' description='Cra. 123 No. 45A - 67 Bogotá D. C., Colombia' Icono={<Room color='primary' />} />
        </MyColumn2>

        <Grid item md={3}>
          <MyContainerMenu container direction='column' alignItems='baseline'>
            <ListaMenu footer />
            <MyLinkTerminos to='/' activeClassName='active'>Términos y condiciones</MyLinkTerminos>
          </MyContainerMenu>
        </Grid>

      </MyContainerFooter>
      <MyContainerColombia container spacing={1} justify='center'>
        <Box py={3}>
          <Typography variant='body1' color='primary'>Hecho con ❤ en Colombia | Lovicon Retail © 2020 | Todos los derechos reservados</Typography>
        </Box>
      </MyContainerColombia>
    </ContenedorPadre>
  )
}

export default Footer
