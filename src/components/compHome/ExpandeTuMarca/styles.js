import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const Container = styled(Grid)({
  width: '100%',
  padding: '100px  100px 80px 100px',
  [theme.breakpoints.down('md')]: {
    padding: '80px 40px 60px 40px'
  },
  [theme.breakpoints.down('xs')]: {
    padding: '60px 20px 40px 20px'
  }
})

export const Title = styled('h3')({
  fontSize: '32px',
  fontWeight: 400,
  paddingTop: '20px',
  width: 'max-content',
  position: 'relative',
  margin: 0,
  '&:before': {
    content: '\'\'',
    width: '80%',
    height: '3px',
    backgroundColor: '#FF4A55',
    position: 'absolute',
    top: 0,
    left: 0
  },
  [theme.breakpoints.down('xs')]: {
    width: 'auto'
  }
})

export const Text = styled('p')({
  fontWeight: 300,
  fontSize: '18px',
  lineHeight: '24px',
  paddingTop: '80px',
  margin: 0,
  [theme.breakpoints.down('xs')]: {
    paddingTop: '60px'
  }
})

export const SubtitleBanner = styled('h4')({
  fontSize: '24px',
  lineHeight: '28px',
  fontWeight: 300,
  paddingBottom: '20px',
  borderBottom: '3px solid #FF4A55',
  margin: '0 0 20px 0',
  [theme.breakpoints.down('xs')]: {
    fontSize: '18px',
    lineHeight: '24px'
  }
})
