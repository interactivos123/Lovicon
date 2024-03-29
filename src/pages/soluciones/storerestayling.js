import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompStoreRestayling/Banner'
import { Como } from '../../components/CompSoluciones/CompStoreRestayling/Como'
import { Pasos } from '../../components/CompSoluciones/CompStoreRestayling/Pasos'
import { BotonesContacto } from '../../components/CompSoluciones/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompStoreRestayling/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'
import SEO from '../../components/seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const StoreRestayling = () => {
  return (
    <>
      <SEO
        title='Store Restyling - Remodelamos tu tienda física'
        description='Este paquete de soluciones es ideal para marcas que buscan transformarse. Marcas que actualmente tienen un formato de tienda desactualizado y quieren mejorar'
      />
      <Header />
      <Banner />
      <Como />
      <Pasos />
      <BotonesContacto />
      <SiguientePaso />
      <LinksSoluciones />
      <Footer />
    </>
  )
}

export default StoreRestayling
