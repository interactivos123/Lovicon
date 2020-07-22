import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import { theme } from '../../../theme'
import Decoracion from '../../../images/decoracion.webp'

export const MyBoxBackground = styled(Box)({
  backgroundImage: `url(${Decoracion})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  marginTop: '-100px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '40px'
  }
})
