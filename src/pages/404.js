import React from 'react'
import { Error404 } from '../components/Error404'
import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFoundPage = () => (
  <>
    <SEO
      title='404: Not found'
      description='La página que busca no fue encontrada'
    />
    <Header />
    <Error404 />
    <Footer />
  </>
)

export default NotFoundPage
