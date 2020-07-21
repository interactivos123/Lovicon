import { styled } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

export const MyContainerFooter = styled(Grid)({
  maxWidth: '1140px',
  margin: '0 auto',
  padding: '100px 0 40px 0'
})

export const MyColumn1 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& .gatsby-image-wrapper': {
    maxWidth: '250px'
  },
  '& a': {
    padding: '6px',
    display: 'inline-block',
    maxWidth: '36px',
    maxHeight: '36px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.55)'
  },
  '& .MuiBox-root': {
    display: 'flex',
    maxWidth: '250px',
    justifyContent: 'inherit'
  }
})

export const MyContainerMenu = styled(Grid)({
})

export const MyColumn2 = styled(Grid)({
  '& .MuiGrid-container': {
    marginBottom: '20px'
  }
})
