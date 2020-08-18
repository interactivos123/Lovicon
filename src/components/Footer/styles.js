import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
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
    display: 'inline-block',
    maxWidth: '40px',
    maxHeight: '40px',
    transition: '.3s'
  },
  '& a svg': {
    fontSize: '26px'
  },
  '& a svg path': {
    transition: '.3s'
  },
  '& a:hover svg path': {
    fill: '#ef4d58'
  },
  '& .MuiBox-root': {
    display: 'flex',
    maxWidth: '250px',
    justifyContent: 'inherit'
  },
  [theme.breakpoints.down('sm')]: {
    '& .gatsby-image-wrapper': {
      marginBottom: '50px'
    }
  },
  [theme.breakpoints.down('xs')]: {
    '& .gatsby-image-wrapper': {
      margin: '0 auto',
      marginBottom: '50px',
      width: '250px'
    },
    '& .MuiBox-root': {
      width: '250px',
      margin: '0 auto'
    }
  }
})

export const MyContainerMenu = styled(Grid)({
  paddingLeft: 30
})

export const MyColumn2 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('xs')]: {
    marginTop: '50px'
  }
})

export const MyLinkTerminos = styled('li')({
  fontSize: '16px',
  color: theme.palette.text.primary,
  padding: '2px 12px',
  borderRadius: '50px',
  transition: '.3s',
  textDecoration: 'none',
  fontWeight: '500',
  margin: '10px 0 0 15px',
  listStyle: 'none',
  '& a': {
    textDecoration: 'none',
    color: '#000'
  },
  '&:hover': {
    textDecoration: 'none'
  }
})

export const MyContainerColombia = styled(Grid)({
  [theme.breakpoints.down('xs')]: {
    '& p': {
      textAlign: 'center'
    }
  }
})
