import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { MyTitle, MyDescription, ContainerNegro, MyButton } from './styles'

export const Encabezado = () => {
  return (
    <ContainerNegro>
      <ContenedorPadre>
        <MyTitle>Obtención de ayuda de un especialista en ventas de Lovicon</MyTitle>
        <MyDescription>Estamos aquí para responder a sus preguntas y ayudarle a comenzar con su proyecto</MyDescription>
        <a href='tel:+573162664538'>
          <MyButton>Llame al personal de ventas +573162664538</MyButton>
        </a>
      </ContenedorPadre>
    </ContainerNegro>
  )
}
