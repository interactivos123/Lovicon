import { styled } from '@material-ui/core/styles'
import { Swiper } from 'swiper/react'
import { theme } from '../../../theme'

export const ContainerSectionThree = styled('section')({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '60px 0',
  textAlign: 'center',

  '& .swiper-container': {
    maxWidth: '100%'
  }
})

export const Title = styled('h1')({
  color: '#5C5C5C',
  width: '100%',
  fontSize: '36px',
  fontWeight: '500',
  lineHeight: '48px',
  margin: 0,

  '& b': {
    color: '#224FB4',
    fontWeight: '500'
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    lineHeight: '56px'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    lineHeight: '40px'
  }
})

export const Button = styled('button')({
  width: 'auto',
  fontFamily: 'Nunito Sans,-apple-system',
  fontSize: '16px',
  fontWeight: '500',
  background: 'transparent linear-gradient(269deg, #9B2DEF 0%, #2D9BEF 61%, #35EDFB 100%) 0% 0%',
  color: '#fff',
  padding: '20px 50px',
  border: 'none',
  borderRadius: '40px',
  cursor: 'pointer',
  transition: '.3s',

  '&:active': {
    transform: 'scale(0.9)'
  }
})

export const ContainerBorderStep = styled('div')({
  width: '100%',
  height: '100%',
  background: 'transparent linear-gradient(269deg, #9B2DEF 0%, #2D9BEF 61%, #35EDFB 100%) 0% 0%',
  borderRadius: '8px',
  padding: '2px',
  boxSizing: 'border-box'
})

export const ContainerStep = styled('div')({
  width: '100%',
  height: '100%',
  padding: '40px 20px',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  borderRadius: '8px',

  '& img': {
    width: '80%',
    height: 'auto'
  }
})

export const TitleStep = styled('h6')({
  fontSize: '22px',
  fontWeight: '600',
  color: '#393434',
  textAlign: 'center',
  margin: '20px 0'
})

export const TextStep = styled('p')({
  maxWidth: '200px',
  color: '#393434',
  fontSize: '18px',
  fontWeight: '400',
  margin: '0 auto'
})

export const SwiperContainer = styled(Swiper)({
  width: '100%',
  margin: '40px 0',

  '& .swiper-slide': {
    width: 'calc(33.33% - 40px)',
    margin: '0 20px'
  },

  '& .swiper-button-next, & .swiper-button-prev': {
    display: 'none !important'
  },

  '& .swiper-button-next:after, & .swiper-button-prev:after': {
    fontSize: '24px !important',
    color: '#2763C2 !important'
  },

  [theme.breakpoints.down('md')]: {
    '& .swiper-slide': {
      width: 'calc(50% - 80px)',
      margin: '0 40px'
    },

    '& .swiper-button-next': {
      display: 'block !important',
      right: 0
    },

    '& .swiper-button-prev': {
      display: 'block !important',
      left: 0
    }
  },

  [theme.breakpoints.down('sm')]: {
    '& .swiper-slide': {
      width: 'calc(100% - 120px)',
      margin: '0 60px'
    }
  }
})
