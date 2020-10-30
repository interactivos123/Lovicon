import React from 'react'
import { Banner } from '../../components/compArquitectura/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'
import SEO from '../../components/seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const ArquitecturaYConstruccion = () => {
  return (
    <>
      <SEO
        title='Arquitectura y Construcción'
        description='Construimos showrooms, almacenes, shop in Shops, Franquicias, Outlets, Pop Up Stores, Flag Ship Stores,Concept Stores.'
      />
      <Header />
      <Banner />
      <TiendasGaleria
        title='Nuestras tiendas'
        imagenes={['1.jpg', '2arquitectura.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']}
        img1='arquitectura1.jpg'
        img2='arquitectura2.jpg'
        img3='arquitectura3.jpg'
      />
      <ConstruirTuTienda title='¿Quieres construir tu tienda?' />
      <Footer />
    </>
  )
}

export default ArquitecturaYConstruccion
