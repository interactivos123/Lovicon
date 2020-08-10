import { styled } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { Swiper } from 'swiper/react'
import { theme } from '../../../theme'

export const TitleLine = styled(Typography)({
  paddingTop: '20px',
  position: 'relative',
  '&:before': {
    content: '\'\'',
    width: '80px',
    height: '3px',
    backgroundColor: '#FF4A55',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: '.3s'
  }
})

export const GridImage = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '80px',
  '& .gatsby-image-wrapper': {
    width: '200px'
  }
})

export const ContainerSwiper = styled(Swiper)({
  '& .swiper-button-next': {
    left: '45%'
  },
  '& .swiper-button-next, .swiper-button-prev': {
    color: '#00E7A0'
  },
  '& .swiper-button-next:after, .swiper-button-prev:after': {
    fontSize: '20px'
  },
  [theme.breakpoints.down('xs')]: {
    '& .swiper-button-next': {
      left: 'auto',
      right: '10px'
    }
  }
})
