import { styled } from '@material-ui/styles'
import { Box, Grid } from '@material-ui/core'
import Bg from '../../../images/circfooter.png'
import Bg2 from '../../../images/rectangulo50.png'

export const MyBoxBg = styled(Box)({
  background: `url(${Bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '105% 0%'
})
export const MyGridBg = styled(Grid)({
  background: `url(${Bg2})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom left'
})
