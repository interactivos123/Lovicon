import { styled } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const GridServiciosS1 = styled(Grid)({
  padding: '80px 100px 80px 100px',
  [theme.breakpoints.down('md')]: {
    padding: '80px 40px 60px 40px'
  },
  [theme.breakpoints.down('xs')]: {
    padding: '60px 20px 40px 20px'
  }
})

export const Title = styled('h3')({
  fontSize: '40px',
  paddingTop: '20px',
  fontWeight: 400,
  position: 'relative',
  margin: 0,
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

export const GridServiciosS2 = styled(Grid)({
  padding: '40px 100px 60px 100px',
  backgroundColor: '#423E3E',
  '& .gatsby-image-wrapper': {
    marginTop: '-180px',
    height: '500px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '80px 40px 60px 40px',
    '& .gatsby-image-wrapper': {
      marginTop: '0'
    }
  },
  [theme.breakpoints.down('xs')]: {
    padding: '60px 20px 40px 20px',
    '& .gatsby-image-wrapper': {
      height: '400px'
    }
  }
})

export const ItemServicio = styled('h6')({
  fontSize: '24px',
  color: '#fff',
  fontWeight: 400,
  margin: 0,
  position: 'relative',
  paddingBottom: '20px',
  marginBottom: '20px',
  width: 'max-content',
  cursor: 'pointer',
  '&:before': {
    content: '\'\'',
    width: '0',
    height: '3px',
    backgroundColor: '#FF4A55',
    position: 'absolute',
    bottom: 0,
    left: 0,
    transition: '.3s'
  },
  '&:hover': {
    '&:before': {
      width: '100%'
    }
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '20px'
  }
})

export const Divisor = styled('hr')({
  width: '100%',
  height: '3px',
  backgroundColor: '#ffffff',
  margin: '40px 0 30px 0',
  border: 'none'
})

export const Text = styled('p')({
  fontSize: '16px',
  fontWeight: 300,
  lineHeight: '20px',
  color: '#ffffff',
  margin: 0,
  transition: '.3s',
  overflow: 'hidden',
  height: '0'
})

export const ContainerImageMobil = styled('div')({
  height: '300px',
  '& .gatsby-image-wrapper': {
    height: '300px'
  }
})
