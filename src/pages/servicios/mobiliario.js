import React from 'react'
import { Banner } from '../../components/compMobiliario/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'
import SEO from '../../components/seo'

const Mobiliario = () => {
  return (
    <>
      <SEO
        title='Mobiliario - Fabricamos el mobiliario de tu tienda'
        description='Fabricamos mostradores, estanterias, exhibidores, mesas, paneles.'
      />
      <Banner />
      <TiendasGaleria
        title='Nuestros mobiliario'
        imagenes={['1mobiliario.jpg', '2mobiliario.jpg', '3mobiliario.jpg', '4mobiliario.jpg', '5mobiliario.jpg', '6mobiliario.jpg', '7mobiliario.jpg', '8mobiliario.jpg', '9mobiliario.jpg', '10mobiliario.jpg', '11mobiliario.jpg', '12mobiliario.jpg', '13mobiliario.jpg', '14mobiliario.jpg']}
      />
      <ConstruirTuTienda title='¿Quieres fabricar el mobiliario para tu tienda?' />
    </>
  )
}

export default Mobiliario
