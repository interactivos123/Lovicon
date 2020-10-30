import React from 'react'
import { Banner } from '../../components/compDiseño/Banner'
import { TiendasGaleria } from '../../components/generals/TiendasGallery'
import { ConstruirTuTienda } from '../../components/generals/ConstruirTienda'
import SEO from '../../components/seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Diseno = () => {
  return (
    <>
      <SEO
        title='Diseño - Diseñamos tu tienda y todos sus elementos'
        description='Diseñamos tu fachada, avisos, mobiliario, señalética, exhibidores.'
      />
      <Header />
      <Banner />
      <TiendasGaleria
        title='Nuestros diseños'
        imagenes={['1diseno.jpg', '2diseno.jpg', '3diseno.jpg', '4diseno.jpg', '5diseno.jpg', '6diseno.jpg', '7diseno.jpg', '8diseno.jpg', '9diseno.jpg', '10diseno.jpg', '11diseno.jpg', '12diseno.jpg']}
      />
      <ConstruirTuTienda title='¿Quieres diseñar tu tienda?' />
      <Footer />
    </>
  )
}

export default Diseno
