import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const ContainerContact = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 30px 20px 30px'
})

export const GridProject = styled(Grid)({
  paddingTop: '30px',
  '& .gatsby-image-wrapper': {
    height: '100%'
  },
  '& .gatsby-image-wrapper img': {
    objectPosition: 'center left !important'
  },
  [theme.breakpoints.down('sm')]: {
    '& .gatsby-image-wrapper': {
      height: 'auto'
    },
    marginTop: '20px'
  }
})
