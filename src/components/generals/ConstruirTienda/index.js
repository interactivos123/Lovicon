import React from 'react'
import { ContenedorPadre, Title } from '../../../theme'
import { Grid, Button } from '@material-ui/core'
import { MyGridContainer, MyMaxWidth, MyContainerButtons } from './style'
import { Link } from 'gatsby'
import { BotonesContacto } from '../BotonesContacto'

export const ConstruirTuTienda = ({ title }) => {
  return (
    <>
      <ContenedorPadre>
        <MyContainerButtons mt={15} mb={15}>
          <MyMaxWidth>
            <Title>{title}</Title>
          </MyMaxWidth>
          <BotonesContacto />
        </MyContainerButtons>
      </ContenedorPadre>
      <MyGridContainer container>

        <Grid item sm={3} xs={6}>
          <Link to='/servicios/arquitectura-y-construccion'>
            <Button>Arquitectura y construcción</Button>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/servicios/diseno'>
            <Button>Diseño </Button>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/servicios/mobiliario'>
            <Button>Mobiliario </Button>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/servicios/visual-merchandising'>
            <Button>Visual Merchandising</Button>
          </Link>
        </Grid>

      </MyGridContainer>
    </>
  )
}
