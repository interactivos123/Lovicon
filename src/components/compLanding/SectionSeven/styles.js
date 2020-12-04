import { styled } from '@material-ui/core/styles'
import { Swiper } from 'swiper/react'
import { theme } from '../../../theme'

export const ContainerPreguntas = styled('div')({
  padding: '80px 0',
  '& .gatsby-image-wrapper': {
    maxWidth: '300px',
    margin: '0 auto'
  }
})

export const Title = styled('h3')({
  fontSize: '40px',
  fontWeight: '500',
  margin: '30px 0 50px 0',
  textAlign: 'center',
  color: '#224FB4',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px'
  }
})

export const Question = styled('div')({
  padding: '0 50px',
  '& h3': {
    fontSize: '22px',
    color: '#224FB4',
    fontWeight: '400',
    textAlign: 'center'
  },
  '& p': {
    marginTop: '30px',
    color: '#252727',
    fontSize: '18px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0px'
  }
})

export const SwiperContainer = styled(Swiper)({
  width: '100%',
  margin: '40px 0',
  paddingBottom: '30px',
  '& .swiper-slide': {
    width: 'calc(50% - 40px)',
    margin: '0 20px'
  },

  '& .swiper-pagination': {
    bottom: '0'
  },

  '& .swiper-pagination span': {
    width: '18px',
    height: '18px',
    background: '#fff',
    border: '1px solid #9B2DEF',
    opacity: '1',
    transition: '.3s'
  },

  '& .swiper-pagination span.swiper-pagination-bullet-active': {
    width: '19px',
    height: '19px',
    backgroundColor: 'rgb(155,45,239)',
    background: 'linear-gradient(260deg, rgba(45,239,232,1) 0%, rgba(45,120,239,1) 100%)',
    border: '1px solid #fff'
  },

  '& .swiper-pagination span:nth-child(2)': {
    display: 'none'
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
    },

    '& .swiper-pagination span:nth-child(2)': {
      display: 'inline-block'
    }
  },

  [theme.breakpoints.down('sm')]: {
    '& .swiper-slide': {
      width: 'calc(100% - 30px)',
      margin: '0 15px'
    }
  }
})
