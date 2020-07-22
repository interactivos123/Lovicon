import { styled } from '@material-ui/styles'
import { Box, Button } from '@material-ui/core'
import Circulo from '../../../images/elipse11.png'

export const ContainerProduct = styled(Box)({
  '& .gatsby-image-wrapper': {
    width: '100px',
    margin: '0 auto'
  },
  '& h4': {
    marginTop: '15px'
  }
})

export const ContainerProudctosYServicios = styled(Box)({
  backgroundImage: `url(${Circulo})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'initial',
  backgroundPosition: '-10% 0%'
})

export const MyButton = styled(Button)({
  minWidth: '50px',
  minHeight: '50px',
  borderRadius: '50%',
  border: '2px solid #000',
  transition: '.3s',
  '&:hover': {
    background: '#000'
  },
  '&:hover svg path': {
    fill: '#fff'
  }
})
