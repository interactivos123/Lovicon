import React from 'react'
import { CompContacto } from '../components/CompContacto'
import SEO from '../components/seo'

const Contactenos = () => {
  return (
    <>
      <SEO
        title='Contáctenos, siempre estamos disponibles para ti'
        description='En Lovicon somos fans de las tiendas físicas, nos especializamos en la construcción de locales comerciales para todas las categorías'
      />
      {/* <Cabecera title='Contactenos' /> */}
      <CompContacto />
    </>
  )
}

export default Contactenos
