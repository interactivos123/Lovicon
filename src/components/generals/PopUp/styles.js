import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'

export const Overlay = styled('section')({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, .5)',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000'
})

export const ContainerPopUp = styled('div')({
  width: '700px',
  height: '400px',
  backgroundColor: '#FFFFFF',
  borderRadius: '5px',
  padding: '20px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    margin: '0 16px'
  }
})

export const ButtonClose = styled('div')({
  position: 'absolute',
  top: '0',
  right: '0',
  width: 'auto',
  background: 'none',
  border: 'none',
  padding: '0',
  margin: '16px 16px 0 0',
  cursor: 'pointer'
})
