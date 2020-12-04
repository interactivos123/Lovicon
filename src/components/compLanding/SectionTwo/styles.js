import { styled } from '@material-ui/styles'
import { theme } from '../../../theme'

export const ContainerBg = styled('div')({
  backgroundColor: 'rgb(36,83,191)',
  background: 'linear-gradient(180deg, rgba(36,83,191,1) 0%, rgba(69,234,221,1) 100%)',
  padding: '60px 0'
})

export const Title = styled('h3')({
  color: '#2DE4E8',
  fontWeight: '500',
  fontSize: '32px',
  marginBottom: '60px',
  maxWidth: '970px',
  '& b': {
    color: '#fff',
    fontWeight: '500'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '28px'
  }
})

export const TwoColumns = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap'
})

export const Marcas = styled('div')({
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
  '& section': {
    width: '100%',
    maxWidth: '500px'
  },
  '& .images': {
    display: 'flex'
  },
  '& .images50': {
    display: 'flex'
  },
  '& .gatsby-image-wrapper': {
    width: '33%',
    padding: '0 30px',
    marginBottom: '30px'
  },
  '& .images50 .gatsby-image-wrapper': {
    width: '50%'
  },
  '& .gatsby-image-wrapper img': {
    objectFit: 'contain !important'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
})

export const BoxIcons = styled('div')({
  width: '40%',
  background: '#fff',
  borderRadius: '20px',
  padding: '30px 50px',
  '& h3': {
    color: '#2355BC',
    fontSize: '28px',
    fontWeight: '400',
    margin: '0',
    marginBottom: '20px'
  },
  '& h3 span': {
    color: '#2DE4E8'
  },
  '& section': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  '& section div': {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  '& svg': {
    width: '100px',
    height: '110px'
  },
  '& h4': {
    margin: '0',
    textAlign: 'center',
    color: '#2355BC',
    fontWeight: '500',
    fontSize: '20px',
    marginBottom: '20px'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  [theme.breakpoints.down('xs')]: {
    '& h3': {
      fontSize: '24px'
    }
  }
})
