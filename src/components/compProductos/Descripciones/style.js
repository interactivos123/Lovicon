import { styled } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyTypography = styled(Typography)({
  maxWidth: '450px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'initial'
  }
})
