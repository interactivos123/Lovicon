import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Swiper } from 'swiper/react'
import { theme } from '../../../../theme'

export const ContainerCard = styled('div')({
  width: '350px',
  border: '1px solid #000',
  padding: '20px',
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
    boxSizing: 'border-box'
  },
  '&& .swiper-slide': {
    width: 'auto',
    height: 'auto'
  }
})

export const ContainerList = styled('div')({
  margin: '0 20px'
})
