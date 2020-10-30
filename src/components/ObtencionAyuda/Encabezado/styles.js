import { styled } from '@material-ui/core/styles'
import { Typography, Box, Button } from '@material-ui/core'
import { theme } from '../../../theme'

export const ContainerNegro = styled(Box)({
  background: '#1A1A1A',
  padding: '100px 0 80px 0'
})

export const MyTitle = styled(Typography)({
  color: '#fff',
  fontWeight: '600',
  display: 'inline-block',
  paddingBottom: '10px',
  marginBottom: '30px',
  fontSize: '28px',
  maxWidth: '650px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px'
  }
})

export const MyDescription = styled(Typography)({
  color: '#fff',
  fontWeight: '400',
  fontSize: '20px',
  maxWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px'
  }
})

export const MyButton = styled(Button)({
  background: '#EF1649',
  color: '#fff',
  borderRadius: '0px',
  marginTop: '30px',
  fontWeight: 400,
  padding: '12px 32px',
  '&:hover': {
    background: '#fff',
    color: '#000'
  }
})
