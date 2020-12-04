import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { StyledSectionSix, Title, ContainerBordePlan, ContainerPlan } from './styles'

const Plan = () => {
  return (
    <ContainerBordePlan>
      <ContainerPlan>
        <h1>Plan</h1>
      </ContainerPlan>
    </ContainerBordePlan>
  )
}

const SectionSix = () => {
  return (
    <StyledSectionSix>
      <ContenedorPadre>
        <Title>Un plan para cada etapa de su marca</Title>
        <Plan />
      </ContenedorPadre>
    </StyledSectionSix>
  )
}

export default SectionSix
