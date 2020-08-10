import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

export const GridImage = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '80px',
  '& .gatsby-image-wrapper': {
    width: '200px'
  }
})
