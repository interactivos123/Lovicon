import { createMuiTheme } from '@material-ui/core/styles'
import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ED7365',
      contrastText: '#fff'
    },
    text: {
      primary: '#000',
      secondary: '#fff'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: ['Nunito Sans', '-apple-system'].join(','),
    h1: {
      fontSize: 40,
      fontWeight: 700
    },
    h2: {
      fontSize: 32,
      fontWeight: 700
    },
    h3: {
      fontSize: 28,
      fontWeight: 700
    },
    h4: {
      fontSize: 22,
      fontWeight: 700
    },
    h5: {
      fontSize: 24,
      fontWeight: 700
    },
    h6: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 300
    },
    subtitle1: {
      fontSize: 56,
      fontWeight: 800,
      lineHeight: '1'
    },
    subtitle2: {
      fontSize: 40,
      fontWeight: 600,
      lineHeight: '1'
    },
    body1: {
      fontSize: 16,
      fontWeight: 400
    },
    body2: {
      fontSize: 18,
      fontWeight: 400
    },
    button: {
      fontSize: 18,
      fontWeight: 700,
      textTransform: 'none'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 25
      },
      outlinedPrimary: {
        borderWidth: 2,
        borderColor: '#000',
        transition: '.3s',
        '&:hover': {
          borderWidth: 2,
          borderColor: '#000',
          color: '#fff',
          padding: '5px 25px',
          background: '#000 !important'
        }
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiFormLabel: {
      root: {
        color: '#000'
      }
    },
    MuiCheckbox: {
      root: {
        color: '#000'
      }
    }
  }
})

theme.typography.subtitle1 = {
  fontFamily: ['Nunito Sans', '-apple-system'].join(','),
  fontSize: 40,
  fontWeight: 800,
  lineHeight: '1',
  [theme.breakpoints.down('sm')]: {
    fontSize: 32
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 24
  }
}

theme.typography.h6 = {
  fontFamily: ['Nunito Sans', '-apple-system'].join(','),
  fontSize: 40,
  fontWeight: 300,
  lineHeight: '1',
  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
    lineHeight: '32px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 18,
    lineHeight: '24px'
  }
}

theme.typography.subtitle2 = {
  fontFamily: ['Nunito Sans', '-apple-system'].join(','),
  fontSize: 28,
  fontWeight: 600,
  lineHeight: '1',
  [theme.breakpoints.down('sm')]: {
    fontSize: 28
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 22
  }
}

theme.typography.body2 = {
  fontFamily: ['Nunito Sans', '-apple-system'].join(','),
  fontSize: 18,
  fontWeight: 400,
  [theme.breakpoints.down('xs')]: {
    fontSize: 16
  }
}

export const LineaHorizontal = styled('div')({
  width: '70px',
  height: '3px',
  background: theme.palette.primary.main,
  margin: '25px 10px 0 0',
  float: 'right',
  [theme.breakpoints.down('md')]: {
    width: '50px',
    margin: '25px 10px 0 0'
  },
  [theme.breakpoints.down('xs')]: {
    margin: '10px 10px 0 0',
    width: 20,
    height: 2
  }
})

export const LineaHorizontalBlanca = styled('div')({
  width: '70px',
  height: '3px',
  background: '#fff',
  margin: '11px 10px 0 0',
  float: 'right',
  [theme.breakpoints.down('xs')]: {
    width: 20,
    height: 2
  }
})

export const ContenedorPadre = styled(Box)({
  padding: '0 100px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '0 64px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 30px'
  },
  [theme.breakpoints.down('xs')]: {
    padding: '0 20px'
  }
})

export const Title = styled('h3')({
  fontSize: '40px',
  paddingTop: '20px',
  fontWeight: 400,
  position: 'relative',
  display: 'inline-block',
  margin: 0,
  '&:before': {
    content: '\'\'',
    width: '120%',
    height: '3px',
    position: 'absolute',
    backgroundColor: '#FF4A55',
    top: 0,
    left: 0
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    '&:before': {
      width: '80%'
    }
  }
})
