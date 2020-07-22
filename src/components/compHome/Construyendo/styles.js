import { styled } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'
import { theme } from '../../../theme'
import Rectangulo from '../../../images/backConstrutendo.png'

export const MyTypography = styled(Typography)({
  margin: '30px 0',
  maxWidth: '400px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'initial',
    margin: '10px 0'
  }
})

export const MyBoxBackground = styled(Box)({
  backgroundImage: `url(${Rectangulo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'initial',
  backgroundPosition: 'top right',
  minHeight: 507
})
