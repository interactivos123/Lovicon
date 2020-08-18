import React from 'react'
import { Banner } from '../../components/compVisualMerchandising/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'

const VisualMerchandising = () => {
  return (
    <>
      <Banner />
      <TiendasGaleria
        title='Nuestro Visual Merchandising '
        imagenes={['visual-1.jpg', 'visual-2.jpg', 'visual-3.jpg', 'visual-1.jpg', 'visual-2.jpg', 'visual-3.jpg']}
      />
      <ConstruirTuTienda title='¿Quieres fabricar el mobiliario para tu tienda?' />
    </>
  )
}

export default VisualMerchandising
