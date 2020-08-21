import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompExpandingBrand/Banner'
import { Como } from '../../components/CompSoluciones/CompExpandingBrand/Como'
import { Pasos } from '../../components/CompSoluciones/CompExpandingBrand/Pasos'
import { BotonesContacto } from '../../components/CompSoluciones/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompExpandingBrand/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'
import SEO from '../../components/seo'

const ExpandingBrand = () => {
  return (
    <>
      <SEO title='Expanding Brand' />
      <Banner />
      <Como />
      <Pasos />
      <BotonesContacto />
      <SiguientePaso />
      <LinksSoluciones />
    </>
  )
}

export default ExpandingBrand
