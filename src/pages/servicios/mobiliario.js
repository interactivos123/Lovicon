import React from 'react'
import { Banner } from '../../components/compMobiliario/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'

const Mobiliario = () => {
  return (
    <>
      <Banner />
      <TiendasGaleria
        title='Nuestros mobiliario'
        imagenes={['mobiliario1.jpg', 'mobiliario2.jpg', 'mobiliario3.jpg', 'mobiliario1.jpg', 'mobiliario2.jpg', 'mobiliario3.jpg']}
      />
      <ConstruirTuTienda title='¿Quieres fabricar el mobiliario para tu tienda?' />
    </>
  )
}

export default Mobiliario
