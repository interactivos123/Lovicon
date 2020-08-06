import React from 'react'
import { ContainerList, PointList, ListText } from './styles'

export const ListItem = ({ children }) => {
  return (
    <ContainerList>
      <PointList />
      <ListText>
        {children}
      </ListText>
    </ContainerList>
  )
}
