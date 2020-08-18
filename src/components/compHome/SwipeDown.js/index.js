import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import Image from '../../image'
import { ContainerSwipeDown } from './styles'
import { SwipeDownIcon } from '../../../icons/SwipeDownIcon'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

SwiperCore.use([Navigation])

export const SwipeDown = () => {
  return (
    <ContainerSwipeDown>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
      >
        <SwiperSlide><Image name='BackgroundSwipeDown.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='arquitectura3.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='ArquitecturaConstruccion.png' /></SwiperSlide>
      </Swiper>
      <AnchorLink to='/#expande'>
        <SwipeDownIcon />
      </AnchorLink>
    </ContainerSwipeDown>
  )
}
