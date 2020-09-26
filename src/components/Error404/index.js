import React from 'react'
import { Box } from '@material-ui/core'
import { LinkButton } from '../generals/Link'
import { MyGrid } from './styles'

export const Error404 = () => {
  return (
    <Box mt={16} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <MyGrid container>
        <h1>404</h1>
        <h3>Ha ocurrido un error</h3>
        <LinkButton
          variant='outlined'
          color='primary'
          to='/'
        >
          Ir al inicio
        </LinkButton>
      </MyGrid>
    </Box>
  )
}
