import React from 'react'
import { Link } from 'gatsby'
import { MyButtonMenu } from './styles'

export const ListaMenu = (props) => {
  return (
    <>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/' activeClassName='active'>Inicio</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/productos-y-servicios' activeClassName='active'>Productos y Servicios</Link>
      </MyButtonMenu>
      <MyButtonMenu onClick={() => props.handleOpen ? props.handleOpen() : null} footer={props.footer}>
        <Link to='/paquetes' activeClassName='active'>Paquetes</Link>
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
