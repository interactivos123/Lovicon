import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'
export const ContainerIcon = styled('div')({
  width: '64px',
  height: '64px',
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  zIndex: 4,
  '&& a': {
    width: '100%',
    height: '100%'
  },
  '&& a svg': {
    width: '100%',
    height: '100%'
  },
  [theme.breakpoints.down('xs')]: {
    width: '48px',
    height: '48px',
    right: '10px',
    bottom: '10px'
  }
})
