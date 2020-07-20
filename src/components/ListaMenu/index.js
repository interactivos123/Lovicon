import React from 'react'
import { Link } from 'gatsby'
import { MyButtonMenu } from './styles'

export const ListaMenu = (props) => {
  return (
    <>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/' activeClassName='active'>Inicio</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/sobre-nosotros' activeClassName='active'>Sobre Nosotros</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/productos-y-servicios' activeClassName='active'>Productos y Servicios</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/paquetes' activeClassName='active'>Paquetes</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/experiencia' activeClassName='active'>Experiencia</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null}>
        <Link to='/contactenos' activeClassName='active'>Contáctenos</Link>
      </MyButtonMenu>
    </>
  )
}
