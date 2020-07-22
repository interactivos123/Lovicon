import { styled } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'

export const Background = styled(Box)({
  backgroundColor: '#fff'
})

export const Separador = styled('div')({
  width: '90%',
  height: 2,
  margin: '20px auto 20px auto',
  backgroundColor: '#000'
})

export const Description = styled(Typography)({
  fontSize: 14,
  textAlign: 'center',
  fontWeight: 600
})
