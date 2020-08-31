import { styled } from '@material-ui/styles'
import { Box, Button } from '@material-ui/core'
import { theme } from '../../theme'

export const ArchiveContainer = styled(Box)({
  margin: '130px auto 0 auto',
  maxWidth: '1280px',
  '& a': {
    textDecoration: 'none'
  },
  '& .gatsby-image-wrapper': {
    height: '200px'
  },
  '& h2': {
    margin: '0 15px',
    display: 'inline-block',
    position: 'relative',
    fontSize: '18px',
    fontWeight: '600',
    paddingTop: '15px',
    color: '#000'
  },
  '& p': {
    fontSize: '14px',
    fontWeight: '300',
    margin: '10px 15px 0 15px',
    color: '#000'
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
