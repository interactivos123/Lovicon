import { styled } from '@material-ui/styles'
import { Box, Typography } from '@material-ui/core'
import { theme } from '../../../theme'
import Decoracion from '../../../images/bgdecoracion.jpg'

export const MyBoxBackground = styled(Box)({
  backgroundImage: `url(${Decoracion})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
  // marginTop: '-100px',
  // [theme.breakpoints.down('sm')]: {
  //   marginTop: '40px'
  // }
})

export const Subtitle = styled(Typography)({
  fontSize: '32px',
  paddingTop: '20px',
  fontWeight: 400,
  position: 'relative',
  display: 'inline-block',
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
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px'
  }
})
