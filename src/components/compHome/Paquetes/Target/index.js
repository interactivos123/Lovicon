import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Separador, Description } from './styles'
import { LinkButton } from '../../../generals/Link'
import { NavigateNext } from '@material-ui/icons'

export const Target = ({ title, children, description }) => {
  return (
    <Box py={3.75} px={2.5} boxShadow={3} m={1.25}>
      <Typography variant='h3' color='primary' align='center'>{title}</Typography>
      {children}
      <Description variant='body1' color='textPrimary'>{description}</Description>
      <Separador />
      <LinkButton to='/' variant='outlined' color='primary' endIcon={<NavigateNext />} fullWidth>
        Más información
      </LinkButton>
    </Box>
  )
}
