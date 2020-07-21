import { createMuiTheme } from '@material-ui/core/styles'

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
      primary: '#000'
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
      fontSize: 24,
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
      fontWeight: 300
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
        '&:hover': {
          borderWidth: 2,
          borderColor: '#000'
        }
      }
    }
  }
})
