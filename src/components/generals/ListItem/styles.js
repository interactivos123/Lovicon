import { styled } from '@material-ui/core/styles'
import { theme } from '../../../theme'

export const ContainerList = styled('div')({
  display: 'flex',
  padding: '10px 0'
})

export const PointList = styled('div')({
  width: '10px',
  height: '10px',
  backgroundColor: '#FF4A55',
  marginRight: '10px',
  marginTop: '4px',
  flexShrink: 0
})

export const ListText = styled('p')({
  fontSize: '18px',
  fontWeight: 300,
  margin: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px'
  }
})
