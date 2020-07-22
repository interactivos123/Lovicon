import React from 'react'
import SEO from '../components/seo'
import { Slider } from '../components/compHome/Slider'
import { Construyendo } from '../components/compHome/Construyendo'
import { RetailNumeros } from '../components/compHome/RetailNumeros'
import { RetailRenovacion } from '../components/compHome/RetailRenovacion'
import { Paquetes } from '../components/compHome/Paquetes'
import { ProductosYServicios } from '../components/compHome/ProductosYServicios'
import { Equipo } from '../components/compHome/Equipo'

const Inicio = () => {
  return (
    <>
      <SEO title='Inicio' />
      <Slider />
      <Construyendo />
      <RetailNumeros />
      <Equipo />
      <RetailRenovacion />
      <ProductosYServicios />
      <Paquetes />
    </>
  )
}

export default Inicio
