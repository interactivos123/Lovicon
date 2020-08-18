import React from 'react'
import { Banner } from '../../components/compDiseño/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'

const Diseno = () => {
  return (
    <>
      <Banner />
      <TiendasGaleria
        title='Nuestros diseños'
        imagenes={['diseno-gallery-1.jpg', 'diseno-gallery-2.jpg', 'diseno-gallery-3.jpg', 'diseno-gallery-1.jpg', 'diseno-gallery-2.jpg', 'diseno-gallery-3.jpg']}
      />
      <ConstruirTuTienda title='¿Quieres diseñar tu tienda?' />
    </>
  )
}

export default Diseno
