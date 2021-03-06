import React from 'react'
import { Link } from 'gatsby'
import { Grid, Button, Collapse } from '@material-ui/core'
import { MyButtonMenu, SubmenuContainer, PadreSubMenu } from './styles'
import { ExpandMore } from '@material-ui/icons'

const ListaMenu = (props) => {
  const Screen = window.screen.width
  const MenuDesplegado = Screen > 960

  const [openProductos, setOpenProductos] = React.useState(MenuDesplegado)
  const [openSoluciones, setOpenSoluciones] = React.useState(MenuDesplegado)

  const handleClickProductos = () => {
    const widthScreen = window.screen.width
    if (widthScreen < 961) {
      setOpenProductos(!openProductos)
    }
  }

  const handleClickSoluciones = () => {
    const widthScreen = window.screen.width
    if (widthScreen < 961) {
      setOpenSoluciones(!openSoluciones)
    }
  }

  return (
    <>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/' activeClassName='active'>Inicio</Link>
      </MyButtonMenu>
      <PadreSubMenu onClick={handleClickProductos}>

        <p>Servicios<ExpandMore /></p>
        <Collapse in={openProductos} timeout='auto' unmountOnExit>
          <SubmenuContainer className='submenu'>
            <Grid container>
              <Grid item md={3}>
                <Link to='/servicios/arquitectura-y-construccion/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}>Arquitectura y construcción</Button>
                </Link>
              </Grid>
              <Grid item md={3}>
                <Link to='/servicios/diseno/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}>Diseño</Button>
                </Link>
              </Grid>
              <Grid item md={3}>
                <Link to='/servicios/mobiliario/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}>Mobiliario</Button>
                </Link>
              </Grid>
              <Grid item md={3}>
                <Link to='/servicios/visual-merchandising/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}>Visual Merchandising</Button>
                </Link>
              </Grid>
            </Grid>
          </SubmenuContainer>
        </Collapse>

      </PadreSubMenu>

      <PadreSubMenu onClick={handleClickSoluciones}>

        <p>Soluciones<ExpandMore /></p>
        <Collapse in={openSoluciones} timeout='auto' unmountOnExit>
          <SubmenuContainer className='submenu'>
            <Grid container>
              <Grid item md={3}>
                <Link to='/soluciones/expanding-brand/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}>Expanding Brand</Button>
                </Link>
              </Grid>
              <Grid item md={3}>
                <Link to='/soluciones/new-store/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}> New store</Button>
                </Link>
              </Grid>
              <Grid item md={3}>
                <Link to='/soluciones/omnichannel-store/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}>Omnichannel Store</Button>
                </Link>
              </Grid>
              <Grid item md={3}>
                <Link to='/soluciones/storerestayling/'>
                  <Button onClick={() => props.handleOpen ? props.handleOpen() : null}>Store-Restyling</Button>
                </Link>
              </Grid>
            </Grid>
          </SubmenuContainer>
        </Collapse>

      </PadreSubMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/blog' activeClassName='active'>Blog</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/contactenos/' activeClassName='active'>Contáctenos</Link>
      </MyButtonMenu>
    </>
  )
}

export default ListaMenu
