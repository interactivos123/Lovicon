import { styled } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

export const MyGrid = styled(Grid)({
  height: 'calc(100vh - 200px)',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '50px',
  '& h1': {
    fontSize: '90px',
    color: '#ce353a',
    margin: '0'
  },
  '& h3': {
    margin: '0',
    fontsize: '30px',
    fontWeight: '400',
    marginBottom: '20px'
  }
})
