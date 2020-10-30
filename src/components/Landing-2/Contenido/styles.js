import { styled } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyTitle = styled(Typography)({
  fontWeight: '600',
  display: 'inline-block',
  paddingBottom: '10px',
  marginBottom: '30px',
  fontSize: '28px',
  padding: '0 20px',
  maxWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px'
  }
})

export const Bloque = styled('div')({
  background: '#999999',
  width: '75px',
  height: '120px',
  margin: '0 auto'
})

export const TitleGrid = styled(Typography)({
  margin: '10px auto 10px auto',
  fontSize: '24px',
  color: '#999999',
  maxWidth: '200px',
  [theme.breakpoints.down('xs')]: {
    maxWidth: 'initial'
  }
})

export const MyTypography = styled(Typography)({
  maxWidth: '200px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px'
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: 'initial'
  }
})
export const MyButton = styled(Button)({
  minWidth: '350px'
})
