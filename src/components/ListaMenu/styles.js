import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { theme } from '../../theme'

export const MyButtonMenu = styled(({ footer, ...other }) => <Button {...other} />)({
  fontSize: '16px',
  marginLeft: '15px',
  padding: '0px',
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
      borderRadius: '0'
    },
    '&:hover a': {
      background: 'none',
      color: theme.palette.primary.main
    },
    '& a.active': {
      background: 'none',
      color: theme.palette.primary.main
    }
  }
})
