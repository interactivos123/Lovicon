import { styled } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import BgSlider from '../../../../../images/BG-Slider.png'

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
  padding: '0 40px',
  backgroundImage: `url(${BgSlider})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '18% 16%'
})

export const TextBanner = styled(Typography)({
  padding: '30px 0px'
})
