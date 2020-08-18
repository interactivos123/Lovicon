import React from 'react'
import { Banner } from '../../components/compArquitectura/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'

const ArquitecturaYConstruccion = () => {
  return (
    <>
      <Banner />
      <TiendasGaleria
        title='Nuestras tiendas'
        imagenes={['arquitectura1.jpg', 'arquitectura2.jpg', 'arquitectura3.jpg', 'arquitectura1.jpg', 'arquitectura2.jpg', 'arquitectura3.jpg']}
        img1='arquitectura1.jpg'
        img2='arquitectura2.jpg'
        img3='arquitectura3.jpg'
      />
      <ConstruirTuTienda title='¿Quieres construir tu tienda?' />
    </>
  )
}

export default ArquitecturaYConstruccion
