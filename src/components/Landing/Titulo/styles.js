import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { theme } from '../../../theme'

export const ContainerTitle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const MyTitle = styled(Typography)({
  color: '#999999',
  fontWeight: '600',
  display: 'inline-block',
  paddingBottom: '10px',
  marginBottom: '30px',
  borderBottom: '3px solid #FF4A55',
  fontSize: '32px',
  padding: '0 20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px'
  }
})

export const MyDescription = styled(Typography)({
  color: '#999999',
  fontWeight: '600',
  fontSize: '22px',
  maxWidth: '500px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px'
  }
})
