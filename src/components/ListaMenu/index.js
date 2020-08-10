import React from 'react'
import { Link } from 'gatsby'
import { Grid, Button } from '@material-ui/core'
import { MyButtonMenu, SubmenuContainer } from './styles'
import { ExpandMore } from '@material-ui/icons'

export const ListaMenu = (props) => {
  return (
    <>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/' activeClassName='active'>Inicio</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer} color='primary'>

        Productos y Servicios<ExpandMore />

        <SubmenuContainer className='submenu'>
          <Grid container>
            <Grid item sm={3}>
              <Link to='/arquitectura-y-construccion'>
                <Button>Arquitectura y contrucción</Button>
              </Link>
            </Grid>
            <Grid item sm={3}>
              <Link to='/arquitectura-y-construccion'>
                <Button>Diseño</Button>
              </Link>
            </Grid>
            <Grid item sm={3}>
              <Link to='/arquitectura-y-construccion'>
                <Button>Mobiliario</Button>
              </Link>
            </Grid>
            <Grid item sm={3}>
              <Link to='/arquitectura-y-construccion'>
                <Button>Visual Merchandising</Button>
              </Link>
            </Grid>
          </Grid>
        </SubmenuContainer>

      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/paquetes' activeClassName='active'>Paquete</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/tienda-virtual' activeClassName='active'>Tienda Virtual</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/contactenos' activeClassName='active'>Contáctenos</Link>
      </MyButtonMenu>
    </>
  )
}
