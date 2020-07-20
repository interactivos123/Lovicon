import { styled } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

export const Container = styled(Grid)({
  background: 'transparent',
  width: '100%',
  height: '100vh',
  position: 'relative',
  '& .gatsby-image-wrapper': {
    width: '100%',
    height: '100%'
  },
  '& .gatsby-image-wrapper img': {
    objectFit: 'contain!important',
    objectPosition: 'bottom!important'
  }
})

export const Content = styled(Grid)({
  padding: '80px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})
