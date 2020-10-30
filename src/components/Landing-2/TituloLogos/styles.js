import { styled } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyTitle = styled(Typography)({
  fontWeight: '600',
  display: 'inline-block',
  paddingBottom: '10px',
  marginBottom: '30px',
  fontSize: '28px',
  padding: '0 20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
    marginBottom: '0px'
  }
})
export const GridLogos = styled(Grid)({
  '& .gatsby-image-wrapper': {
    maxWidth: '120px',
    margin: '0 auto'
  }
})
