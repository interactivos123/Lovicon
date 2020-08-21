import React from 'react'
import { Box, Grid, Typography, Hidden } from '@material-ui/core'
import Image from '../image'
import { RedesSociales } from '../RedesSociales'
import { Phone, Email, Room } from '@material-ui/icons'
import { CajaDeIcono } from '../cajaDeIcono'
import { ContenedorPadre } from '../../theme'
import { MyContainerFooter, MyColumn1, MyContainerMenu, MyColumn2, MyLinkTerminos, MyContainerColombia, Anchor } from './styles'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <ContenedorPadre>
      <MyContainerFooter container direction='row'>

        <MyColumn1 item xs={12} sm={6} md={4}>
          <Image name='LogoLovicon.png' />
          <Box>
            <RedesSociales />
          </Box>
        </MyColumn1>

        <MyColumn2 item xs={12} sm={6} md={5}>
          <Anchor href='tel:573182664538'>
            <CajaDeIcono title='Llámanos o escríbenos' description='(571) 5472239    318 2664538' Icono={<Phone color='primary' />} />
          </Anchor>
          <Anchor href='mailto:comercial1@loviconretail.co'>
            <CajaDeIcono title='E-mail' description='comercial1@loviconretail.co' Icono={<Email color='primary' />} />
          </Anchor>
          <Anchor href='https://goo.gl/maps/LxGzhipR69VnMsZV7' target='_blank'>
            <CajaDeIcono title='Dirección' description='Cra 27 C # 71 B 70. Bogotá-Colombia.' Icono={<Room color='primary' />} />
          </Anchor>
        </MyColumn2>

        <Hidden smDown>
          <Grid item md={3}>
            <MyContainerMenu container direction='column' alignItems='baseline'>
              <MyLinkTerminos>
                <Link to='/'>Inicio</Link>
              </MyLinkTerminos>
              <MyLinkTerminos>
                <Link to='/servicios/arquitectura-y-construccion'>Servicios</Link>
              </MyLinkTerminos>
              <MyLinkTerminos>
                <Link to='/soluciones/expanding-brand'>Soluciones</Link>
              </MyLinkTerminos>
              <MyLinkTerminos>
                <Link to='/contactenos'>Contáctenos</Link>
              </MyLinkTerminos>
              <MyLinkTerminos>
                <Link to='/tratamiento-de-datos'>Términos y condiciones</Link>
              </MyLinkTerminos>
            </MyContainerMenu>
          </Grid>
        </Hidden>

      </MyContainerFooter>
      <MyContainerColombia container spacing={1} justify='center'>
        <Box py={2}>
          <Typography variant='body1' color='primary'>Lovicon Retail © 2020 | Todos los derechos reservados</Typography>
        </Box>
      </MyContainerColombia>
    </ContenedorPadre>
  )
}

export default Footer
