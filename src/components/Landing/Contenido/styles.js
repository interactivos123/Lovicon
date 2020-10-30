import { styled } from '@material-ui/core/styles'
import { Grid, Typography, Box } from '@material-ui/core'
import { theme } from '../../../theme'

export const ContainerGrid = styled(Grid)({
  '& .gatsby-image-wrapper': {
    maxWidth: '80%',
    margin: '0 auto'
  },
  [theme.breakpoints.down('xs')]: {
    '& .gatsby-image-wrapper': {
      maxWidth: '100%'
    }
  }
})

export const MyTitle = styled(Typography)({
  color: '#999999',
  fontWeight: '600',
  fontSize: '28px',
  maxWidth: '500px',
  marginBottom: '20px'
})

export const TextAnimation = styled('span')({
  width: '100%',
  position: 'relative',
  display: 'block',
  paddingBottom: '10px',
  color: '#999999',
  fontWeight: '600',
  fontSize: '20px',
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

export const MyBox = styled(Box)({
  background: '#FF4A55',
  position: 'absolute',
  bottom: '-40px',
  padding: '20px 40px',
  [theme.breakpoints.down('xs')]: {
    position: 'relative',
    bottom: '0'
  }
})

export const DescriptionBox = styled(Typography)({
  color: '#fff',
  fontSize: '16px',
  '& span': {
    marginLeft: '15px'
  }
})
