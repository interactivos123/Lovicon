import { styled } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'
import Rectangulo from '../../../images/backConstrutendo.png'

export const MyTypography = styled(Typography)({
  margin: '30px 0',
  maxWidth: '400px'
})

export const MyBoxBackground = styled(Box)({
  backgroundImage: `url(${Rectangulo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'initial',
  backgroundPosition: 'top right',
  minHeight: 507
})
