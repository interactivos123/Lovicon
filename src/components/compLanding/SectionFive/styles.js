import { styled } from '@material-ui/styles'

export const Container = styled('div')({
  padding: '80px 0',
  display: 'flex'
})

export const Col1 = styled('div')({
  width: '50%'
})

export const Col2 = styled('div')({
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
  '& section': {
    background: '#252727',
    width: '100%',
    maxWidth: '450px',
    padding: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: '40px'
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
  }
})

export const Title = styled('h3')({
  fontSize: '32px',
  color: '#ED144E',
  fontWeight: '500',
  margin: '0'
})

export const Subtitle = styled('h5')({
  color: '#2DE4E8',
  fontSize: '28px',
  fontWeight: '500',
  margin: '15px 0'
})

export const Text = styled('p')({
  fontSize: '22px',
  color: '#252727',
  marginTop: '30px'
})
