import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { theme } from '../../../theme'
import { Link } from 'gatsby'

export const MyButton = styled(Button)({
  color: '#FF4A55',
  padding: '15px 50px',
  fontSize: '22px',
  fontWeight: '400',
  borderRadius: '0px',
  border: '1px solid #FF4A55',
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    height: 'auto'
  },
  [theme.breakpoints.down('xs')]: {
    minWidth: '100%',
    fontSize: '20px',
    padding: '15px'
  }
})

export const StyledLink = styled(Link)({
  textDecoration: 'none'
})
export const Anchor = styled('a')({
  textDecoration: 'none'
})
