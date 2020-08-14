import { styled } from '@material-ui/styles'
import { Swiper } from 'swiper/react'
import { theme } from '../../../theme'

export const SwiperContainer = styled(Swiper)({
  marginTop: '40px',
  '& .gatsby-image-wrapper': {
    width: '150px',
    height: '130px'
  },
  '& .gatsby-image-wrapper img': {
    objectFit: 'contain !important'
  }
})

export const Title = styled('h3')({
  fontSize: '40px',
  paddingTop: '20px',
  fontWeight: 400,
  position: 'relative',
  margin: 0,
  width: 'max-content',
  '&:before': {
    content: '\'\'',
    width: '80%',
    height: '3px',
    position: 'absolute',
    backgroundColor: '#FF4A55',
    top: 0,
    left: 0
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '28px'
  }
})
