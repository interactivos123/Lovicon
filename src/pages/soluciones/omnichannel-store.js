import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompOmniChannelStore/Banner'
import { Como } from '../../components/CompSoluciones/CompOmniChannelStore/Como'
import { Ventajas } from '../../components/CompSoluciones/CompOmniChannelStore/Ventajas'
import { BotonesContacto } from '../../components/CompSoluciones/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompOmniChannelStore/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'
import SEO from '../../components/seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const OmniChannelStore = () => {
  return (
    <>
      <SEO
        title='Omnichannel Store - Acercamos tu marca a la omnicanalidad'
        description='Si bien la Omnicanalidad está asociada generalmente a software y tecnología, la tienda física desempeña un papel fundamental'
      />
      <Header />
      <Banner />
      <Como />
      <Ventajas />
      <BotonesContacto />
      <SiguientePaso />
      <LinksSoluciones />
      <Footer />
    </>
  )
}

export default OmniChannelStore
