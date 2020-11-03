import React from 'react'
import { Titulo } from '../components/Landing/Titulo'
import { Logos } from '../components/Landing/Logos'
import { Contenido } from '../components/Landing/Contenido'
import { Contacto } from '../components/Landing/Contacto'

const Landing = () => {
  return (
    <>
      <Titulo />
      <Logos />
      <Contenido />
      <Contacto />
    </>
  )
}

export default Landing
