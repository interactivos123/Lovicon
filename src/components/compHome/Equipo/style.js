import { styled } from '@material-ui/styles'
import { Box, Grid, Typography } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyBox = styled(Box)({
  margin: '30px 0',
  '& p': {
    maxWidth: '400px'
  },
  [theme.breakpoints.down('md')]: {
    '& p': {
      maxWidth: 'initial'
    }
  }
})

export const ContainerProduct = styled(Box)({
  marginBottom: '15px',
  '& .gatsby-image-wrapper': {
    width: '100px',
    margin: '0 auto'
  },
  '& .gatsby-image-wrapper img': {
    borderRadius: '50%'
  },
  '& h4': {
    marginTop: '15px'
  }
})

export const BgBox = styled(Box)({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-12% -12%'
})

export const MyGrid = styled(Grid)({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom right'
})

export const TitleLine = styled(Typography)({
  paddingTop: '20px',
  position: 'relative',
  '&&:before': {
    content: '\'\'',
    width: '80px',
    height: '3px',
    backgroundColor: '#FF4A55',
    position: 'absolute',
    top: 0,
    left: 0
  }
})
