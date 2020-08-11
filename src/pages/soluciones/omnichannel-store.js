import React from 'react'
import { Banner } from '../../components/CompSoluciones/CompOmniChannelStore/Banner'
import { Como } from '../../components/CompSoluciones/CompOmniChannelStore/Como'
import { Ventajas } from '../../components/CompSoluciones/CompOmniChannelStore/Ventajas'
import { BotonesContacto } from '../../components/CompSoluciones/CompOmniChannelStore/BotonesContacto'
import { SiguientePaso } from '../../components/CompSoluciones/CompOmniChannelStore/SiguientePaso'
import { LinksSoluciones } from '../../components/CompSoluciones/LinksSoluciones'

const OmniChannelStore = () => {
  return (
    <>
      <Banner />
      <Como />
      <Ventajas />
      <BotonesContacto />
      <SiguientePaso />
      <LinksSoluciones />
    </>
  )
}

export default OmniChannelStore
