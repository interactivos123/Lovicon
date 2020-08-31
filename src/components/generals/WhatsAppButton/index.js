import React from 'react'
import { ContainerIcon } from './styles'
import { WhatsApp } from '../.././../icons/WhatsApp'

export default function WhatsAppButton () {
  return (
    <ContainerIcon>
      <a href='https://wa.link/tiyq8e' rel='noreferrer' target='_blank'>
        <WhatsApp />
      </a>
    </ContainerIcon>
  )
}
