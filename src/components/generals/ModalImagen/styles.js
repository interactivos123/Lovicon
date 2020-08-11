import { styled } from '@material-ui/core/styles'
import { Modal, IconButton } from '@material-ui/core'
import { theme } from '../../../theme'

export const ContainerImageModal = styled('div')({
  '& button': {
    width: '100%',
    background: 'transparent',
    border: '0',
    padding: '0',
    margin: '0'
  },
  '& button .gatsby-image-wrapper': {
    cursor: 'pointer'
  }
})
export const MyModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ContainerModal = styled('div')({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .gatsby-image-wrapper': {
    width: '100%',
    height: '100%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%'
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%'
  }
})

export const MyClose = styled(IconButton)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  '& svg path': {
    fill: '#fff'
  }
})
