import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { theme } from '../../theme'

export const Title = styled(Typography)({
  fontSize: '32px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '20px'
  }
})
