import React from 'react'
import { Error404 } from '../components/Error404'

import SEO from '../components/seo'

const NotFoundPage = () => (
  <>
    <SEO
      title='404: Not found'
      description='La página que busca no fue encontrada'
    />
    <Error404 />
  </>
)

export default NotFoundPage
