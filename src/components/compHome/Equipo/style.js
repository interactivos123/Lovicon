import { styled } from '@material-ui/styles'
import { Box, Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyBox = styled(Box)({
  margin: '30px 0',
  '& p': {
    maxWidth: '400px'
  },
  [theme.breakpoints.down('md')]: {
    '& p': {
      maxWidth: 'initial'
    }
  }
})

export const ContainerProduct = styled(Box)({
  marginBottom: '15px',
  '& .gatsby-image-wrapper': {
    width: '100px',
    margin: '0 auto'
  },
  '& .gatsby-image-wrapper img': {
    borderRadius: '50%'
  },
  '& h4': {
    marginTop: '15px'
  }
})

export const GridColumn1 = styled(Grid)({

})
