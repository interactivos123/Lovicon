import { FormControl, Select, TextField, Typography } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'

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

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column'
})

export const ButtonForm = styled('button')({
  background: '#000000',
  color: '#FFFFFF',
  boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  padding: '6px 16px',
  width: '100%',
  fontFamily: 'Nunito Sans, -apple-system',
  fontWeight: '600',
  lineHeight: '1.75',
  borderRadius: '25px',
  marginTop: '20px',
  border: 'none',
  fontSize: '18px',
  cursor: 'pointer'
})

export const ContainerMessageSent = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Title = styled(Typography)({
  padding: '20px 0',
  [theme.breakpoints.down('xs')]: {
    fontSize: '22px'
  }
})

export const TextSent = styled(Typography)({
  textAlign: 'center',
  maxWidth: '350px',
  [theme.breakpoints.down('xs')]: {
    paddingTop: '0'
  }
})
