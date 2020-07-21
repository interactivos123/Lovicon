import React from 'react'
import SEO from '../components/seo'
import { Slider } from '../components/compHome/Slider'

import { Construyendo } from '../components/compHome/Construyendo'
import { RetailNumeros } from '../components/compHome/RetailNumeros'
import { RetailRenovacion } from '../components/compHome/RetailRenovacion'
<<<<<<< HEAD
import { Paquetes } from '../components/compHome/Paquetes'
=======
import { ProductosYServicios } from '../components/compHome/ProductosYServicios'

SwiperCore.use([Pagination])
>>>>>>> Simon

const Inicio = () => {
  return (
    <>
      <SEO title='Inicio' />
      <Slider />
      <Construyendo />
      <RetailNumeros />
      <RetailRenovacion />
      <Paquetes />
      <ProductosYServicios />
    </>
  )
}

export default Inicio
