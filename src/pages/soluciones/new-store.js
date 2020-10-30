import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompNewStore/Banner'
import { Como } from '../../components/CompSoluciones/CompNewStore/Como'
import { Pasos } from '../../components/CompSoluciones/CompNewStore/Pasos'
import { BotonesContacto } from '../../components/CompSoluciones/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompNewStore/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'
import SEO from '../../components/seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const NewStore = () => {
  return (
    <>
      <SEO
        title='New Store - Diseñamos el espacio ideal | Lovicon'
        description='Diseñamos el espacio ideal para que tus clientes se vinculen con tu marca'
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

export default NewStore
