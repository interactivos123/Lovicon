import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
// import { theme } from '../../theme'

export const ContainerGrid = styled(Grid)({
  '& .gatsby-image-wrapper': {
    maxWidth: '120px',
    margin: '0 auto'
  }
})
