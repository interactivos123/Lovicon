import React from 'react'
import { Container, Content } from './styles'
import Image from '../../image'
import { Grid, Typography } from '@material-ui/core'
import { LinkButton } from '../../generals/Link'
import { NavigateNext } from '@material-ui/icons'

export const Slide1 = () => {
  return (
    <Container container>
      <Content item md={5} xl={5}>
        <Typography variant='h3'>Arquitectura y</Typography>
        <Typography variant='h3'>Construcción</Typography>
        <Typography variant='body1'>La arquitectura comercial se ha convertido en una sofisticada estrategia de marketing.</Typography>
        <LinkButton
          endIcon={<NavigateNext />}
          variant='outlined'
        >
            Arquitectura
        </LinkButton>
      </Content>
      <Grid item md={7} xl={7}>
        <Image name='imageBanner1.png' />
      </Grid>

    </Container>
  )
}
