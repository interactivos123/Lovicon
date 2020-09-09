import { styled } from '@material-ui/styles'
import { Box, Button, Typography } from '@material-ui/core'
import { theme } from '../../theme'

export const ArchiveContainer = styled(Box)({
  margin: '130px auto 0 auto',
  maxWidth: '1140px',
  '& a': {
    textDecoration: 'none'
  },
  '& .gatsby-image-wrapper': {
    width: '100%',
    height: '231px'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '130px auto 0 auto',
    padding: '0 30px'
  },
  [theme.breakpoints.down('xs')]: {
    margin: '130px auto 0 auto',
    padding: '0 15px',
    '&& .MuiGrid-container': {
      width: '100%'
    }
  }
})
export const MyButton = styled(Button)({
  margin: '10px 15px 0 15px',
  fontSize: '16px',
  fontWeight: '400',
  border: '1px solid',
  transition: '.3s',
  '&:hover': {
    background: '#ff4a55',
    color: '#fff'
  }
})
export const StepNumber = styled('span')({
  fontSize: '12px',
  display: 'block',
  color: '#000',
  textDecoration: 'none'
})

export const StepTitle = styled('h3')({
  fontSize: '18px',
  fontWeight: '600',
  marginTop: '0',
  marginBottom: '20px',
  color: '#000',
  textDecoration: 'none'
})

export const StepContent = styled(Typography)({
  fontSize: '14px',
  color: '#000',
  textDecoration: 'none'
})
export const ContainerCard = styled('div')({
  width: 'auto',
  border: '1px solid #000',
  padding: '30px 35px 30px 35px',
  height: '100%',
  [theme.breakpoints.down('xs')]: {
    width: '100%'
  }
})
