import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { theme } from '../../theme'

export const MyButtonMenu = styled(Button)({
  fontSize: '16px',
  marginLeft: '15px',
  padding: '0px',
  '& a': {
    color: theme.palette.text.primary,
    padding: '2px 12px',
    borderRadius: '50px',
    transition: '.3s',
    textDecoration: 'none',
    fontWeight: '500'
  },

  '&:hover a': {
    background: theme.palette.primary.main,
    color: '#fff',
    textDecoration: 'none'
  },
  '& a.active': {
    background: theme.palette.primary.main,
    color: '#fff',
    textDecoration: 'none',
    position: 'relative'
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
    padding: '10px 20px',
    margin: '0',
    borderRadius: '0',
    '& a': {
      borderRadius: '0'
    },
    '&:hover a': {
      background: 'none',
      color: theme.palette.primary.main
    },
    '& a.active': {
      background: 'none',
      color: theme.palette.primary.main
    }
  }
})
