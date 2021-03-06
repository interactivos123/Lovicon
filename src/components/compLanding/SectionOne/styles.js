import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'

export const StyledSectionOne = styled('section')({
  width: '100%',
  height: '100vh',
  position: 'relative'
})

export const ContainerBackgroundImage = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '55%',
  height: '100%',
  borderRadius: '40px 0 0 40px',
  overflow: 'hidden',

  '& .gatsby-image-wrapper': {
    height: '100%'
  },

  '& .gatsby-image-wrapper img': {
    objectFit: 'cover',
    objectPosition: 'left center !important'
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '54%',
    borderRadius: '0px 0px 40px 40px'
  }
})

export const Container = styled('div')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  height: '100vh'
})

export const ColumnLeft = styled('div')({
  width: '40%',
  height: '100%',
  padding: '40px 40px 40px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '40px 0'
  }
})

export const ContainerLogo = styled('div')({
  maxWidth: '180px',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    zIndex: 2,
    alignSelf: 'flex-end'
  }
})

export const Title = styled('h1')({
  color: '#5C5C5C',
  width: '100%',
  fontSize: '34px',
  fontWeight: '600',
  lineHeight: '48px',

  '& b': {
    color: '#224FB4',
    fontWeight: '600'
  },
  '& strong': {
    fontSize: '26px',
    lineHeight: '40px',
    display: 'block',
    maxWidth: '400px'
  },
  '& span': {
    display: 'block',
    color: '#224FB4',
    fontSize: '20px',
    fontWeight: '300',
    lineHeight: '1.5em'
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '34px',
    lineHeight: '56px',
    zIndex: 2,
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    margin: '120px 0 0 0',
    boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.4)'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
    lineHeight: '36px',
    '& strong': {
      fontSize: '20px',
      lineHeight: '30px',
      maxWidth: '320px'
    },
    '& span': {
      fontSize: '18px'
    }
  }
})

export const CallToAction = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '22px',
  textAlign: 'center',

  '& a': {
    color: '#224FB4',
    textDecoration: 'none',
    fontWeight: '600'
  },

  '& svg': {
    margin: '20px 0 0 0'
  }
})

export const ColumnRight = styled('div')({
  width: '60%',
  height: '100%'
})
