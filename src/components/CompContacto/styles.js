import { FormControl, Select, TextField, Typography } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { theme } from '../../theme'

export const MyFormControl = styled(FormControl)({
  maxWidth: '600px',
  marginTop: 8
})

export const MySelect = styled(Select)({

})

export const TwoInputs = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column'
  }
})

export const MyInputText = styled(TextField)({
  width: 'calc(50% - 12px)',
  [theme.breakpoints.down('xs')]: {
    width: '100%'
  }
})

export const Terms = styled(Typography)({
  textDecoration: 'none'
})
