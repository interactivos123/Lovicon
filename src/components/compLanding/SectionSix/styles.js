import { styled } from '@material-ui/core/styles'
import { Swiper } from 'swiper/react'
import { theme } from '../../../theme'
import { FormControl, Typography } from '@material-ui/core'
import Check from '../../../images/Check.png'

export const StyledSectionSix = styled('section')({
  width: '100%',
  backgroundColor: '#252727',
  padding: '60px 0',

  '& .swiper-wrapper': {
    boxSizing: 'border-box'
  }
})

export const Title = styled('h3')({
  color: '#FFFFFF',
  width: '100%',
  fontSize: '36px',
  fontWeight: '500',
  lineHeight: '48px',
  margin: 0,

  [theme.breakpoints.down('md')]: {
    fontSize: '40px',
    lineHeight: '56px'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    lineHeight: '40px'
  }
})

export const ContainerPlans = styled(Swiper)({
  width: '100%',
  margin: '60px 0 0 0',
  paddingBottom: '80px',
  borderBottom: '2px solid #FFFFFF',

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
      width: 'calc(100% - 20px)',
      margin: '0 10px'
    }
  }
})

export const StyledPlan = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
})

export const TitlePlan = styled('h6')({
  width: 'auto',
  padding: '10px 20px',
  borderRadius: '7px',
  backgroundColor: '#ED144E',
  position: 'absolute',
  top: '-16px',
  left: '-40px',
  margin: 0,
  fontSize: '22px',
  color: '#FFFFFF',
  fontWeight: '500',

  [theme.breakpoints.down('sm')]: {
    left: '-20px'
  }
})

export const ContainerBordePlan = styled('div')({
  width: 'calc(100% - 40px)',
  background: 'transparent linear-gradient(269deg, #9B2DEF 0%, #2D9BEF 61%, #35EDFB 100%) 0% 0%',
  borderRadius: '8px',
  padding: '2px',
  boxSizing: 'border-box',
  margin: '16px 0 0 40px',
  position: 'relative',
  flexGrow: 1,

  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 20px)',
    margin: '16px 0 0 20px'
  }
})

export const ContainerPlan = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  padding: '60px 20px 20px 20px',
  backgroundColor: '#070606',
  boxSizing: 'border-box',
  borderRadius: '8px',
  margin: 0,
  minHeight: '450px'
})

export const ContainerListPlan = styled('ul')({
  width: '100%',
  margin: '0',
  padding: '0'
})

export const ListItem = styled('li')({
  width: '100%',
  color: '#FFFFFF',
  marginBottom: '20px',
  listStyle: 'none',
  fontSize: '20px',
  background: `url(${Check})`,
  backgroundRepeat: 'no-repeat',
  paddingLeft: '40px',
  backgroundPosition: 'center left'
})

export const Precio = styled('span')({
  display: 'block',
  fontSize: '14px',
  fontWeight: '400',
  color: '#FFFFFF',
  textAlign: 'center',
  width: '100%',
  marginTop: '40px'
})

export const Descripcion = styled('p')({
  margin: '20px 0',
  fontSize: '16px',
  fontWeight: '500',
  color: '#FFFFFF',
  textAlign: 'center',
  width: '100%'
})

export const Button = styled('button')({
  width: 'calc(100% - 40px)',
  fontFamily: 'Nunito Sans,-apple-system',
  fontSize: '16px',
  fontWeight: '500',
  background: 'transparent linear-gradient(269deg, #9B2DEF 0%, #2D9BEF 61%, #35EDFB 100%) 0% 0%',
  color: '#fff',
  padding: '16px 50px',
  border: 'none',
  borderRadius: '40px',
  cursor: 'pointer',
  transition: '.3s',
  marginLeft: '40px',

  '&:active': {
    transform: 'scale(0.9)'
  }
})

export const ContainerForm = styled('div')({
  paddingTop: '80px',
  display: 'flex',
  flexDirection: 'column'
})

export const Anchor = styled('a')({
  display: 'block',
  color: '#FFFFFF',
  textAlign: 'center',
  fontSize: '20px',
  width: '100%',
  maxWidth: '280px',
  margin: '40px auto'
})

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  padding: '40px',

  [theme.breakpoints.down('sm')]: {
    padding: '40px 20px'
  }
})

export const MyFormControl = styled(FormControl)({
  maxWidth: '600px',
  margin: '0 auto'
})

export const TextPrivacyPolicy = styled('p')({
  color: '#363131',
  fontWeight: '500',
  fontSize: '12px',

  '& a': {
    marginTop: '4px',
    color: '#ED144E',
    textDecoration: 'none'
  }
})

export const ButtonForm = styled('button')({
  padding: '10px 20px',
  backgroundColor: '#ED144E',
  borderRadius: '10px',
  color: '#FFFFFF',
  border: 'none',
  width: 'max-content',
  fontSize: '18px',
  fontWeight: '500',
  cursor: 'pointer',
  marginTop: '30px'
})

export const TitleForm = styled('h3')({
  color: '#363131',
  width: '100%',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '40px',
  marginBottom: '20px',
  margin: 0,

  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
    lineHeight: '32px'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '28px'
  }
})

export const ContainerMessageSent = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const TextSent = styled(Typography)({
  textAlign: 'center',
  maxWidth: '350px',
  [theme.breakpoints.down('xs')]: {
    paddingTop: '0'
  }
})
