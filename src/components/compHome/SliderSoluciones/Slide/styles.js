import { styled } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { theme } from '../../../../theme'

export const GridImage = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '80px',
  '& .gatsby-image-wrapper': {
    width: '200px'
  }
})

export const SliderText = styled(Typography)({
  [theme.breakpoints.down('xs')]: {
    textAlign: 'center'
  }
})
