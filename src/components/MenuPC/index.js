import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Image from '../image'
import { Menu } from '@material-ui/icons'
import { Link } from 'gatsby'
import loadable from '@loadable/component'

import {
  MyAppBar,
  MyToolbar,
  MyIconButton,
  MyContainerMenu,
  MyContainerIconMenuResponsive
} from './styles'

const ListaMenu = loadable(() => import('../ListaMenu'))

export const MenuPC = (props) => {
  useEffect(() => {
    const navbar = document.getElementById('header')
    window.onscroll = function () {
      if (window.pageYOffset >= 1) {
        navbar.classList.add('sticky')
      } else {
        navbar.classList.remove('sticky')
      }
    }
  })

  return (
    <MyAppBar position='fixed' color='primary' id='header'>
      <MyToolbar>
        <Grid container alignItems='center'>

          <Grid item xs={4}>
            <Link to='/'>
              <Image name='LogoLovicon.png' description='Logo Lovicon' />
            </Link>
          </Grid>

          <Grid item xs={8}>

            <MyContainerMenu container justify='flex-end'>
              <ListaMenu />
            </MyContainerMenu>

            <MyContainerIconMenuResponsive container justify='flex-end'>
              <MyIconButton color='primary' aria-label='menu' onClick={() => props.handleOpen()}>
                <Menu />
              </MyIconButton>
            </MyContainerIconMenuResponsive>

          </Grid>

        </Grid>
      </MyToolbar>
    </MyAppBar>
  )
}
