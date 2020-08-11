import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { theme } from '../../../../theme'

export const MyButton = styled(Button)({
  color: '#FFF',
  padding: '15px 40px',
  fontSize: '18px',
  fontWeight: '400',
  borderRadius: '0px',
  width: 'max-content',
  height: '100%',
  background: '#FF4A55',
  [theme.breakpoints.down('xs')]: {
    minWidth: '100%',
    fontSize: '16px',
    padding: '15px'
  }
})
