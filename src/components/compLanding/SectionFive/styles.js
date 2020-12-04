import { styled } from '@material-ui/styles'
import { theme, ContenedorPadre } from '../../../theme'

export const ContenedorPadreEspecial = styled(ContenedorPadre)({
  [theme.breakpoints.down('sm')]: {
    paddingRight: '0',
    paddingLeft: '0'
  }
})

export const Container = styled('div')({
  padding: '80px 0',
  display: 'flex',
  flexWrap: 'wrap'
})

export const Col1 = styled('div')({
  width: '50%',
  [theme.breakpoints.down('md')]: {
    paddingRight: '30px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0 30px'
  }
})

export const Col2 = styled('div')({
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  '& p': {
    display: 'none'
  },
  '& section': {
    background: '#252727',
    width: '100%',
    maxWidth: '450px',
    padding: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: '60px'
  },
  '& section div': {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '& section div h4': {
    color: '#fff',
    margin: '10px 0px 20px 0px',
    textAlign: 'center'
  },
  '& section svg': {
    width: '70px',
    height: '70px'
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    '& section': {
      maxWidth: 'none'
    },
    '& p': {
      display: 'block',
      color: '#fff',
      fontSize: '18px',
      fontWeight: '600'
    },
    '& section div': {
      width: '25%'
    }
  },
  [theme.breakpoints.down('xs')]: {
    '& section div h4': {
      fontSize: '14px'
    },
    '& section svg': {
      width: '60px',
      height: '60px'
    }
  }
})

export const Title = styled('h3')({
  fontSize: '40px',
  color: '#ED144E',
  fontWeight: '500',
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px'
  }
})

export const Subtitle = styled('h5')({
  color: '#2DE4E8',
  fontSize: '32px',
  fontWeight: '500',
  margin: '15px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    fontWeight: '600'
  }
})

export const Text = styled('p')({
  fontSize: '22px',
  color: '#252727',
  marginTop: '30px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    fontWeight: '600',
    '& span': {
      display: 'none'
    }
  }
})
