import { styled } from '@material-ui/styles'
import { Typography, Grid } from '@material-ui/core'
import RectanguloVerde from '../../../images/rectangulo50.png'
import RectanguloRojo from '../../../images/trazado51.png'
import { theme } from '../../../theme'

export const MyTypography = styled(Typography)({
  maxWidth: '400px',
  marginTop: '30px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 'none'
  }
})

export const MyGreenBgFigure = styled(Grid)({
  backgroundImage: `url(${RectanguloVerde})`,
  backgroundSize: 'initial',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right'
})

export const MyRedBgFigure = styled(Grid)({
  backgroundImage: `url(${RectanguloRojo})`,
  backgroundSize: 'initial',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '100% 40%'
})
