import { styled } from '@material-ui/styles'
import { Button, Grid } from '@material-ui/core'
import { theme } from '../../../theme'

export const MyButton = styled(Button)({
  color: '#FF4A55',
  padding: '15px 50px',
  fontSize: '22px',
  fontWeight: '400',
  borderRadius: '0px',
  border: '1px solid #FF4A55',
  minWidth: '480px',
  [theme.breakpoints.down('xs')]: {
    minWidth: '100%',
    fontSize: '20px',
    padding: '15px'
  }
})

export const MyGridContainer = styled(Grid)({
  '& .MuiGrid-item': {
    border: '1px solid #FF4A55',
    borderLeft: '0px',
    padding: '0px',
    margin: '0px'
  },
  '& .MuiGrid-item:nth-child(4)': {
    borderRight: '0px'
  },
  '& button': {
    width: '100%',
    height: '100%',
    fontWeight: '400',
    fontSize: '20px',
    color: '#FF4A55',
    borderRadius: '0px',
    padding: '20px 0'
  },
  [theme.breakpoints.down('xs')]: {
    '& .MuiGrid-item:nth-child(3), & .MuiGrid-item:nth-child(4)': {
      borderTop: '0px'
    },
    '& .MuiGrid-item:nth-child(2)': {
      borderRight: '0px'
    }
  }
})

export const MyMaxWidth = styled('div')({
  maxWidth: '600px'
})
