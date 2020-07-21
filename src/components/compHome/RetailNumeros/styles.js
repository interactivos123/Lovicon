import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Decoracion from '../../../images/decoracion.png'

export const MyBoxBackground = styled(Box)({
  backgroundImage: `url(${Decoracion})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '200px',
  marginTop: '-100px'
})
