import React from 'react'
import { Typography } from '@material-ui/core'
import { Separador, Description, Background } from './styles'
import { LinkButton } from '../../../generals/Link'
import { NavigateNext } from '@material-ui/icons'

export const Target = ({ title, children, description }) => {
  return (
    <Background py={3.75} px={2.5} boxShadow={3} m={1.25}>
      <Typography variant='h3' color='primary' align='center'>{title}</Typography>
      {children}
      <Description variant='body1' color='textPrimary'>{description}</Description>
      <Separador />
      <LinkButton to='/contactenos' variant='outlined' color='primary' endIcon={<NavigateNext />} fullWidth>
        Más información
      </LinkButton>
    </Background>
  )
}
