import { styled } from '@material-ui/styles'
import { Box, Typography } from '@material-ui/core'
// import { theme } from '../../../theme'
import Decoracion from '../../../images/decoracion.webp'

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
  position: 'relative',
  paddingTop: '20px',
  '&:before': {
    content: '\'\'',
    backgroundColor: '#ffffff',
    width: '100px',
    height: '3px',
    position: 'absolute',
    top: 0,
    left: 0
  }
})
