import { styled } from '@material-ui/core/styles'
import { AppBar, Toolbar, Grid, IconButton } from '@material-ui/core'
import { theme } from '../../theme'

export const MyAppBar = styled(AppBar)({
  background: 'transparent',
  padding: '10px 40px',
  height: '100px',
  transition: '.3s',
  justifyContent: 'center',
  boxShadow: 'none',
  '& .gatsby-image-wrapper': {
    width: '160px',
    transition: '.3s'
  },
  '&.sticky': {
    background: '#fff',
    height: '60px'
  },
  '&.sticky .gatsby-image-wrapper': {
    width: '130px'
  },
  '&.sticky .submenu': {
    top: '60px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 30px'
  }
})

export const MyToolbar = styled(Toolbar)({
  width: '100%',
  margin: '0 auto',
  padding: 0,
  minHeight: '0px',
  '& svg': {
    marginLeft: '10px'
  }
})

export const MyContainerSocials = styled(Grid)({
  height: '29px',
  transition: '.3s',
  overflow: 'hidden',
  marginBottom: '5px',
  '&.sticky': {
    height: '0px',
    marginBottom: '0px'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
})

export const MyIconButton = styled(IconButton)({
  padding: '0',
  '& svg': {
    fontSize: '40px',
    margin: 0
  }
})
export const MyContainerMenu = styled(Grid)({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
})
export const MyContainerIconMenuResponsive = styled(Grid)({
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
})
