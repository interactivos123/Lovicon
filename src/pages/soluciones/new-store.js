import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompNewStore/Banner'
import { Como } from '../../components/CompSoluciones/CompNewStore/Como'
import { Pasos } from '../../components/CompSoluciones/CompNewStore/Pasos'
import { BotonesContacto } from '../../components/CompSoluciones/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompNewStore/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'
import SEO from '../../components/seo'

const NewStore = () => {
  return (
    <>
      <SEO title='New Store' />
      <Banner />
      <Como />
      <Pasos />
      <BotonesContacto />
      <SiguientePaso />
      <LinksSoluciones />
    </>
  )
}

export default NewStore
