import { styled } from '@material-ui/core/styles'
import { Drawer, IconButton, Grid } from '@material-ui/core'
import { theme } from '../../theme'

export const MyDrawer = styled(Drawer)({
  '& .MuiPaper-root': {
    width: '100%',
    background: '#FF4A55'
  }
})

export const MyIconButton = styled(IconButton)({
  '& svg': {
    fontSize: '30px',
    margin: 0
  },
  [theme.breakpoints.down('sm')]: {
    '&& svg path': {
      fill: '#fff'
    }
  }
})

export const MyContainerSocials = styled(Grid)({
  padding: '20px 0 0 30px',
  '& a': {
    marginRight: '10px'
  },
  [theme.breakpoints.down('sm')]: {
    '&& svg path': {
      fill: '#fff'
    }
  }
})
