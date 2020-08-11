import { styled } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyColumn = styled(Grid)({
  '& .gatsby-image-wrapper': {
    height: 'calc(100vh - 96px)'
  },
  [theme.breakpoints.down('xs')]: {
    '& .gatsby-image-wrapper': {
      height: 'auto'
    }
  }
})
