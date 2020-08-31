import { styled } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { Swiper } from 'swiper/react'
import { theme } from '../../../theme'

export const MyGridExt = styled(Grid)({
  width: '30%'
})

export const MyGridCenter = styled(Grid)({
  width: '40%'
})

export const ContainerSwiper = styled(Swiper)({
  '&& .swiper-wrapper': {
    alignItems: 'center',
    boxSizing: 'border-box',
    overflow: 'visible',
    minHeight: '370px'
  },
  '&& .swiper-slide': {
    width: '30%',
    height: 'auto',
    transition: '.3s'
  },
  '&& .swiper-slide .gatsby-image-wrapper': {
    height: '250px',
    transition: '.3s'
  },
  '&& .swiper-slide.swiper-slide-next .gatsby-image-wrapper': {
    height: '300px'
  },
  '&& .swiper-slide.swiper-slide-next': {
    width: '40%'
  },
  '&& .swiper-button-next , && .swiper-button-prev': {
    color: '#00E7A0'
  },
  '&& .swiper-button-next': {
    right: '4px'
  },
  '&& .swiper-button-prev': {
    left: '4px'
  },
  '&& .swiper-button-next:after , && .swiper-button-prev:after': {
    fontSize: '24px'
  },
  '&& .swiper-button-disabled': {
    opacity: 0
  },
  [theme.breakpoints.down('md')]: {
    '&& .swiper-slide': {
      width: '50%'
    },
    '&& .swiper-slide.swiper-slide-next': {
      width: '50%'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '&& .swiper-slide': {
      width: '100%'
    },
    '&& .swiper-slide.swiper-slide-next': {
      width: '100%'
    }
  }
})
