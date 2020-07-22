import React from 'react'
import { Cabecera } from '../components/generals/Cabecera'
import { PaquetesComp } from '../components/compHome/Paquetes'
export const Paquetes = () => {
  return (
    <>
      <Cabecera title='Paquetes' />
      <PaquetesComp noTitulo />
    </>
  )
}

export default Paquetes
