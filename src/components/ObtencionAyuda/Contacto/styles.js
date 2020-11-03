import { styled } from '@material-ui/core/styles'
import { List } from '@material-ui/core'
// import { theme } from '../../../theme'

export const ContainerList = styled(List)({
  '& span': {
    fontSize: '18px !important'
  },
  '& li': {
    padding: '5px 16px !important'
  }
})
