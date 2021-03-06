import { styled } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { theme } from '../../../../../theme'

export const Container = styled(Grid)({
  width: '100%',
  padding: '160px 100px 60px 100px',
  '& a': {
    textDecoration: 'none',
    color: '#000'
  },
  [theme.breakpoints.down('md')]: {
    padding: '160px 40px 60px 40px'
  },
  [theme.breakpoints.down('xs')]: {
    padding: '140px 20px 40px 20px'
  }
})

export const TitlePage = styled('h1')({
  fontSize: '30px',
  fontFamily: ['Nunito Sans', '-apple-system'].join(','),
  fontWeight: '300',
  lineHeight: '1',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
    lineHeight: '32px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 18,
    lineHeight: '24px'
  }
})

export const TitleBanner = styled('h3')({
  fontSize: '48px',
  lineHeight: '60px',
  fontWeight: 400,
  marginTop: '20px',
  paddingRight: '100px',
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
    lineHeight: '40px',
    paddingRight: '20px'
  },
  [theme.breakpoints.down('xs')]: {
    paddingRight: 0,
    fontSize: '24px',
    lineHeight: '32px'
  }
})

export const SubtitleBanner = styled('h4')({
  fontSize: '24px',
  lineHeight: '28px',
  fontWeight: 300,
  paddingBottom: '20px',
  borderBottom: '3px solid #FF4A55',
  margin: '0 0 20px 0',
  [theme.breakpoints.down('xs')]: {
    fontSize: '18px',
    lineHeight: '24px'
  }
})

export const TextAnimation = styled('span')({
  width: '100%',
  position: 'relative',
  display: 'block',
  paddingBottom: '10px',
  '&:hover:before': {
    width: '100%'
  },
  '&:before': {
    content: '\'\'',
    width: '0',
    position: 'absolute',
    bottom: '0',
    left: '0',
    heigth: '',
    height: '3px',
    background: '#FF4A55',
    transition: '.3s'
  }
})
