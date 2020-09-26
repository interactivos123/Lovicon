import React from 'react'
import { Link } from 'gatsby'
import { Box, Grid } from '@material-ui/core'
import { MyGridContainer, MyButton } from './styles'

export const LinksSoluciones = () => {
  return (
    <Box mt={12.5}>
      <MyGridContainer container>
        <Grid item sm={3} xs={6}>
          <Link to='/soluciones/expanding-brand/'>
            <MyButton>Expanding Brand</MyButton>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/soluciones/new-store/'>
            <MyButton>New Store</MyButton>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/soluciones/omnichannel-store/'>
            <MyButton>OmniChannel Store</MyButton>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/soluciones/storerestayling/'>
            <MyButton>StoreRestayling </MyButton>
          </Link>
        </Grid>
      </MyGridContainer>
    </Box>
  )
}
