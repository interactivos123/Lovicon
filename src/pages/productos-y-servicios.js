import React from 'react'
import { Cabecera } from '../components/generals/Cabecera'
import { Arquitectura } from '../components/compProductos/Arquitectura'
import { Diseño } from '../components/compProductos/Diseño'
import { Imagenes } from '../components/compProductos/Imagenes'
import { Mobiliario } from '../components/compProductos/Mobiliario'
import { Visual } from '../components/compProductos/Visual'

export const ProductosYServicios = () => {
  return (
    <>
      <Cabecera title='Productos y Servicios' />

      <Arquitectura />
      <Imagenes img1='apple1.jpg' img2='apple2.jpg' img3='apple3.jpg' />

      <Diseño />
      <Imagenes img1='restaurant1.jpg' img2='restaurant2.jpg' img3='restaurant3.jpg' />

      <Mobiliario />
      <Imagenes img1='kia1.jpg' img2='kia2.jpg' img3='kia3.jpg' />

      <Visual />
      <Imagenes img1='apple1.jpg' img2='apple2.jpg' img3='apple3.jpg' />

    </>
  )
}

export default ProductosYServicios
