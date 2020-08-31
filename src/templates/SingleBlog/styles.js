import { styled } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import { theme } from '../../theme'

export const ContainerSingleBlog = styled(Box)({
  margin: '130px auto 0 auto',
  maxWidth: '800px',
  '& article p br': {
    marginBottom: '25px'
  },
  '& article img': {
    width: '100%'
  },
  '& article p': {
    fontSize: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '130px auto 0 auto',
    padding: '0 30px'
  },
  [theme.breakpoints.down('xs')]: {
    margin: '130px auto 0 auto',
    padding: '0 15px'
  }

})
export const Title = styled('h1')({
  fontSize: '35px',
  paddingTop: '20px',
  fontWeight: 400,
  position: 'relative',
  display: 'inline-block',
  margin: 0,
  '&:before': {
    content: '\'\'',
    width: '80%',
    height: '3px',
    position: 'absolute',
    backgroundColor: '#FF4A55',
    top: 0,
    left: 0
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    '&:before': {
      width: '80%'
    }
  }
})
export const Fecha = styled('p')({
  fontSize: '15px',
  color: '#000',
  fontWeight: '500'
})
