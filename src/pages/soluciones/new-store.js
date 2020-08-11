import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompNewStore/Banner'
import { Como } from '../../components/CompSoluciones/CompNewStore/Como'
import { Pasos } from '../../components/CompSoluciones/CompNewStore/Pasos'
import { BotonesContacto } from '../../components/CompSoluciones/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompNewStore/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'

const NewStore = () => {
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

export default NewStore
