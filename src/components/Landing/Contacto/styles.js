import { styled } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const ContainerContact = styled('div')({
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
  borderBottom: '3px solid #FF4A55',
  fontSize: '26px',
  padding: '0 20px'
})

export const GridProject = styled(Grid)({
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    marginTop: '20px'
  }
})

export const MyButton = styled(Button)({
  minWidth: '80%'
})
