import React from 'react'
import SEO from '../components/seo'
import { RetailNumeros } from '../components/compHome/RetailNumeros'
import { PaquetesComp } from '../components/compHome/Paquetes'
import { ProductosYServicios } from '../components/compHome/ProductosYServicios'
import { Equipo } from '../components/compHome/Equipo'
import { Slide1 } from '../components/compHome/Slider/Slides/Slide1'
const Inicio = () => {
  return (
    <>
      <SEO title='Inicio' />
      <Slide1 />
      {/* <Slider /> */}
      {/* <Construyendo /> */}
      <RetailNumeros />
      <Equipo />
      {/* <RetailRenovacion /> */}
      <ProductosYServicios />
      <PaquetesComp />
    </>
  )
}

export default Inicio
