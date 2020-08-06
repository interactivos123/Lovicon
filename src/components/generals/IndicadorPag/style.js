import { Typography } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'

export const MyTypography = styled(Typography)({
  fontSize: '28px',
  fontWeight: '400',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
})
