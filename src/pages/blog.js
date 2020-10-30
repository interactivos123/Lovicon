import React from 'react'
import SEO from '../components/seo'
import { CompBlog } from '../components/compBlog'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <>
      <SEO
        title='Blog'
      />
      <Header />
      <CompBlog />
      <Footer />
    </>
  )
}

export default Blog
