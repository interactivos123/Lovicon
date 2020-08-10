import React from 'react'
import Image from '../../image'
import { ContainerSwipeDown } from './styles'
import { SwipeDownIcon } from '../../../icons/SwipeDownIcon'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const SwipeDown = () => {
  return (
    <ContainerSwipeDown>
      <Image name='BackgroundSwipeDown.jpg' />
      <AnchorLink to='/#expande'>
        <SwipeDownIcon />
      </AnchorLink>
    </ContainerSwipeDown>
  )
}
