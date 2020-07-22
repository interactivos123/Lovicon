import { styled } from '@material-ui/core/styles'
import BackgroundImage from '../../../images/BgPaquetes.webp'

export const Background = styled('div')({
  width: '100%',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
})
