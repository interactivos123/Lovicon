import React from 'react'
import Image from '../../image'
import { ContainerSwipeDown } from './styles'
import { SwipeDownIcon } from '../../../icons/SwipeDownIcon'
export const SwipeDown = () => {
  return (
    <ContainerSwipeDown>
      <Image name='BackgroundSwipeDown.jpg' />
      <SwipeDownIcon />
    </ContainerSwipeDown>
  )
}
