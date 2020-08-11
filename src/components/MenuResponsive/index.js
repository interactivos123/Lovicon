import React from 'react'
import { MyDrawer, MyIconButton, MyContainerSocials } from './styles'
import CloseIcon from '@material-ui/icons/Close'
import { RedesSociales } from '../RedesSociales'
import { Grid } from '@material-ui/core'
import loadable from '@loadable/component'
const ListaMenu = loadable(() => import('../ListaMenu'))

export const MenuResponsive = (props) => {
  return (
    <MyDrawer
      anchor='left'
      variant='temporary'
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Grid container justify='flex-end'>
        <MyIconButton color='primary' aria-label='menu' onClick={() => props.handleOpen()}>
          <CloseIcon />
        </MyIconButton>
      </Grid>

      <ListaMenu handleOpen={props.handleOpen} />

      <MyContainerSocials container alignItems='center'>
        <RedesSociales />
      </MyContainerSocials>
    </MyDrawer>
  )
}
