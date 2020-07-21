import { styled } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'

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
  height: 'calc(100% - 60px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 40px'
})

export const TextBanner = styled(Typography)({
  padding: '20px 0px'
})
