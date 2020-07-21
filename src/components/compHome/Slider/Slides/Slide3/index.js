import React from 'react'
import { Container, Content, TextBanner } from './styles'
import Image from '../../../../image'
import { Grid, Typography } from '@material-ui/core'
import { LinkButton } from '../../../../generals/Link'
import { NavigateNext } from '@material-ui/icons'
import { LineaHorizontal } from '../../../../../theme'

export const Slide3 = () => {
  return (
    <Container container alignItems='flex-end'>
      <Content item md={5} xl={5}>
        <Grid container>
          <Grid item md={2}>
            <LineaHorizontal />
          </Grid>
          <Grid item md={10}>
            <Typography variant='subtitle2'>Arquitectura y</Typography>
            <Typography variant='subtitle1'>Construcción</Typography>
            <TextBanner variant='body2'>La arquitectura comercial se ha convertido en una sofisticada estrategia de marketing.</TextBanner>
            <LinkButton
              endIcon={<NavigateNext />}
              variant='outlined'
              color='primary'
            >
              Arquitectura
            </LinkButton>
          </Grid>
        </Grid>
      </Content>
      <Grid item md={7} xl={7}>
        <Image name='imageBanner1.png' />
      </Grid>

    </Container>
  )
}
