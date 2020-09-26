import React from 'react'
import { Banner } from '../../components/compVisualMerchandising/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'
import SEO from '../../components/seo'

const VisualMerchandising = () => {
  return (
    <>
      <SEO
        title='Visual Merchandising'
        description='Diseñamos el plan de merchandising de tu tienda haciendo la gestión del surtido, localización del producto, presentación del producto, comunicación'
      />
      <Banner />
      <TiendasGaleria
        title='Nuestro Visual Merchandising '
        imagenes={['1visual.jpg', '2visual.jpg', '3visual.jpg', '4visual.jpg']}
      />
      <ConstruirTuTienda title='¿Quieres fabricar el mobiliario para tu tienda?' />
    </>
  )
}

export default VisualMerchandising
