import { styled } from '@material-ui/core/styles'
import { Grid, ListItem } from '@material-ui/core'

export const GridData = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

export const Url = styled('a')({
  textDecoration: 'none',
  color: '#000000'
})

export const StyledListItem = styled(ListItem)({
  paddingLeft: 0
})
