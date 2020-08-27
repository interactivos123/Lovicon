import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Swiper } from 'swiper/react'
import { theme } from '../../../../theme'

export const ContainerCard = styled('div')({
  width: 'auto',
  border: '1px solid #000',
  padding: '20px 40px 20px 20px',
  height: '100%',
  [theme.breakpoints.down('xs')]: {
    width: '100%'
  }
})

export const StepNumber = styled('span')({
  fontSize: '12px',
  display: 'block'
})

export const StepTitle = styled('h3')({
  fontSize: '18px',
  fontWeight: '600',
  marginTop: '0',
  marginBottom: '40px'
})

export const StepContent = styled(Typography)({
  fontSize: '14px'
})

export const ContainerSwiper = styled(Swiper)({
  '&& .swiper-wrapper': {
    alignItems: 'stretch',
    boxSizing: 'border-box',
    overflow: 'visible'
  },
  '&& .swiper-slide': {
    width: '25%',
    height: 'auto'
  },
  '&& .swiper-button-next , && .swiper-button-prev': {
    color: '#FF4A55'
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
      width: '33.33%'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '&& .swiper-slide': {
      width: '50%'
    }
  }
})

export const ContainerList = styled('div')({
  margin: '0 20px'
})
