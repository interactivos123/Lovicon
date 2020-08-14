import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'

export const ContainerSwipeDown = styled('section')({
  width: '100%',
  position: 'relative',
  '& .gatsby-image-wrapper': {
    height: '500px'
  },
  '& svg': {
    position: 'absolute',
    top: '40px',
    left: '100px',
    cursor: 'pointer'
  },
  [theme.breakpoints.down('md')]: {
    '& svg': {
      left: '40px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    '& .gatsby-image-wrapper': {
      height: '400px'
    }
  },
  [theme.breakpoints.down('xs')]: {
    '& svg': {
      left: '20px'
    }
  }
})
