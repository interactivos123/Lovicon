import React from 'react'
import { CompContacto } from '../components/CompContacto'
import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contactenos = () => {
  return (
    <>
      <SEO
        title='Contáctenos, siempre estamos disponibles para ti'
        description='En Lovicon somos fans de las tiendas físicas, nos especializamos en la construcción de locales comerciales para todas las categorías'
      />
      {/* <Cabecera title='Contactenos' /> */}
      <Header />
      <CompContacto />
      <Footer />
    </>
  )
}

export default Contactenos
