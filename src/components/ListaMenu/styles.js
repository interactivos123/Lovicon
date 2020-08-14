import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Button, Box } from '@material-ui/core'
import { theme } from '../../theme'

export const MyButtonMenu = styled(({ footer, ...other }) => <Button {...other} />)({
  fontSize: '16px',
  marginLeft: '15px',
  padding: '0px',
  fontWeight: '500',
  '& a': {
    color: theme.palette.text.primary,
    padding: '2px 12px',
    borderRadius: '50px',
    transition: '.3s',
    textDecoration: 'none',
    fontWeight: '500'
  },
  '& a.active': {
    textDecoration: 'none',
    position: 'relative',
    marginLeft: (props) =>
      props.footer
        ? 0
        : 20
  },
  '& a:before': {
    content: '\'\'',
    width: 0,
    height: 2,
    position: 'absolute',
    backgroundColor: '#000',
    top: 15,
    left: -14,
    transition: '.3s',
    marginLeft: 20
  },
  '& a.active:before': {
    width: (props) =>
      props.footer
        ? 0
        : 20,
    marginLeft: 0
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'flex-start',
    padding: '10px 20px',
    margin: '0',
    borderRadius: '0',
    '& a': {
      borderRadius: '0',
      color: '#fff'
    },
    '&:hover a': {
      background: 'none',
      color: theme.palette.primary.contrastText
    },
    '& a.active': {
      background: 'none',
      color: theme.palette.primary.contrastText
    },
    '& a:before': {
      background: '#fff'
    }
  }
})

export const SubmenuContainer = styled(Box)({
  background: '#FF4A55',
  position: 'fixed',
  width: '100vw',
  left: '0',
  top: '96px',
  opacity: '0',
  visibility: 'hidden',
  transition: '.3s',
  '& button': {
    width: '100%',
    color: '#fff',
    padding: '50px 0',
    fontSize: '20px',
    fontWeight: '400',
    borderRadius: '0'
  },
  '& a': {
    textDecoration: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    opacity: '1',
    visibility: 'visible',
    position: 'relative',
    width: 'auto',
    top: '0px',
    left: '0px',
    background: 'transparent',
    '& .MuiGrid-container': {
      flexDirection: 'column'
    },
    '& button': {
      color: '#fff',
      padding: '10px 20px',
      fontSize: '16px'
    },
    '& button span': {
      display: 'block',
      textAlign: 'left',
      paddingLeft: '30px'
    }
  }
})

export const PadreSubMenu = styled('div')({
  color: '#000',
  fontSize: '16px',
  margin: '0px',
  paddingLeft: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500',
  cursor: 'pointer',
  '& p': {
    display: 'flex'
  },
  '&& svg': {
    width: '20px',
    marginLeft: '5px'
  },
  '&:hover .submenu': {
    opacity: '1',
    visibility: 'visible'
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    color: '#fff',
    '& p': {
      textAlign: 'left',
      width: '100%',
      paddingLeft: '16px',
      display: 'flex'
    },
    '& .MuiCollapse-container': {
      width: '100%'
    }
  }
})
