import { styled } from '@material-ui/core/styles'
import { Grid, Link } from '@material-ui/core'
import { theme } from '../../theme'
// import rectFooter from '../../images/rectfooer.png'
// import circFooter from '../../images/circfooter.png'

export const MyContainerFooter = styled(Grid)({
  maxWidth: '1140px',
  margin: '0 auto',
  padding: '100px 0 40px 0'
})

export const MyColumn1 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& .gatsby-image-wrapper': {
    maxWidth: '250px'
  },
  '& a': {
    padding: '6px',
    display: 'inline-block',
    maxWidth: '36px',
    maxHeight: '36px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.55)',
    transition: '.3s'
  },
  '& a:hover': {
    background: '#000'
  },
  '& a svg path': {
    transition: '.3s'
  },
  '& a:hover svg path': {
    fill: '#fff'
  },
  '& .MuiBox-root': {
    display: 'flex',
    maxWidth: '250px',
    justifyContent: 'inherit'
  }
})

export const MyContainerMenu = styled(Grid)({
  paddingLeft: 30
})

export const MyColumn2 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // background: `url(${rectFooter})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right',
  backgroundSize: 'initial'
})

export const MyLinkTerminos = styled(Link)({
  fontSize: '16px',
  color: theme.palette.text.primary,
  padding: '2px 12px',
  borderRadius: '50px',
  transition: '.3s',
  textDecoration: 'none',
  fontWeight: '500',
  margin: '20px 0 0 15px',
  '&:hover': {
    textDecoration: 'none'
  }
})

export const MyContainerColombia = styled(Grid)({
  // background: `url(${circFooter})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right',
  backgroundSize: 'initial'
})
