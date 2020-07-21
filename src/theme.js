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
      fontSize: 24,
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
      fontSize: 24,
      fontWeight: 700
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
    }
  }
})

export const LineaHorizontal = styled('div')({
  width: '70px',
  height: '3px',
  background: theme.palette.primary.main,
  margin: '25px 10px 0 0',
  float: 'right'
})

export const LineaHorizontalBlanca = styled('div')({
  width: '70px',
  height: '3px',
  background: '#fff',
  margin: '11px 10px 0 0',
  float: 'right'
})

export const ContenedorPadre = styled(Box)({
  padding: '0 80px'
})
