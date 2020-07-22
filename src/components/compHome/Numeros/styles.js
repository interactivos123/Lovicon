import { styled } from '@material-ui/styles'
import { Typography, Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyTypographyNumero = styled(Typography)({
  fontSize: '60px',
  fontWeight: 300
})

export const MyGrid = styled(Grid)({
  [theme.breakpoints.down('md')]: {
    width: '20%'
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%'
  }
})
