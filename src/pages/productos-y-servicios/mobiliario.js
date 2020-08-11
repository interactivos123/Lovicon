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
        img1='mobiliario1.jpg'
        img2='mobiliario2.jpg'
        img3='mobiliario3.jpg'
      />
      <ConstruirTuTienda title='¿Quieres fabricar el mobiliario para tu tienda?' />
    </>
  )
}

export default Mobiliario
