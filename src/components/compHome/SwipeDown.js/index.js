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
        <SwiperSlide><Image name='1.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='3.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='4.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='5.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='6.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='7.jpg' /></SwiperSlide>
        <SwiperSlide><Image name='8.jpg' /></SwiperSlide>
      </Swiper>
      <AnchorLink to='/#expande'>
        <SwipeDownIcon />
      </AnchorLink>
    </ContainerSwipeDown>
  )
}
