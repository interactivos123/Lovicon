import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompStoreRestayling/Banner'
import { Como } from '../../components/CompSoluciones/CompStoreRestayling/Como'
import { Pasos } from '../../components/CompSoluciones/CompStoreRestayling/Pasos'
import { BotonesContacto } from '../../components/CompSoluciones/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompStoreRestayling/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'

const StoreRestayling = () => {
  return (
    <>
      <Banner />
      <Como />
      <Pasos />
      <BotonesContacto />
      <SiguientePaso />
      <LinksSoluciones />
    </>
  )
}

export default StoreRestayling
