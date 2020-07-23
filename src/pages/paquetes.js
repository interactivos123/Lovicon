import React from 'react'
import { Cabecera } from '../components/generals/Cabecera'
import { CompPaquetes } from '../components/compPaquetes/'
export const Paquetes = () => {
  return (
    <>
      <Cabecera title='Paquetes' />
      <CompPaquetes />
    </>
  )
}

export default Paquetes
