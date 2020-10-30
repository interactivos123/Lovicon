import React from 'react'
import SEO from '../components/seo'
import { RetailNumeros } from '../components/compHome/RetailNumeros'
import { ProductosYServicios } from '../components/compHome/ProductosYServicios'
import { Slide1 } from '../components/compHome/Slider/Slides/Slide1'
import { SwipeDown } from '../components/compHome/SwipeDown.js'
import { ExpandeTuMarca } from '../components/compHome/ExpandeTuMarca'
import { Soluciones } from '../components/compHome/Soluciones'
import { Clientes } from '../components/compHome/Clientes'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Inicio = () => {
  return (
    <>
      <SEO
        title='Arquitectura, diseño y gestión de tiendas físicas'
        description='Somos la compañía más completa de arquitectura comercial y comunicación para puntos de venta, tiene como misión ayudar a las marcas a expandirse'
      />
      <Header />
      <Slide1 />
      <SwipeDown />
      <ExpandeTuMarca />
      {/* <Slider /> */}
      {/* <Construyendo /> */}
      <RetailNumeros />
      <ProductosYServicios />
      <Clientes />
      {/* <Equipo /> */}
      {/* <RetailRenovacion /> */}
      {/* <PaquetesComp /> */}
      <Soluciones />
      <Footer />
    </>
  )
}

export default Inicio
