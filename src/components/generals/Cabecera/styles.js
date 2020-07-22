import { styled } from '@material-ui/core/styles'

export const ContainerBgImage = styled('div')({
  width: '100%',
  position: 'relative'
})

export const ContainerImage = styled('div')({
  height: '100%',
  position: 'absolute',
  width: '100%',
  overflow: 'hidden',
  '& .gatsby-image-wrapper': {
    height: '100%'
  }
})
