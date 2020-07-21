import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
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
