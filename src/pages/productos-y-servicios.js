import React from 'react'
import { Cabecera } from '../components/generals/Cabecera'
import { Arquitectura } from '../components/compProductos/Arquitectura'
import { Imagenes } from '../components/compProductos/Imagenes'

export const ProductosYServicios = () => {
  return (
    <>
      <Cabecera title='Productos y Servicios' />
      <Arquitectura />
      <Imagenes img1='apple1.jpg' img2='apple2.jpg' img3='apple3.jpg' />
    </>
  )
}

export default ProductosYServicios
