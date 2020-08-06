import React from 'react'
import { GridServiciosS1, Title, GridServiciosS2, ItemServicio, Text, Divisor } from './style'
import { Grid } from '@material-ui/core'
import Image from '../../image'

export const ProductosYServicios = () => {
  return (
    <>
      <GridServiciosS1 container>
        <Title>Nuestros Servicios</Title>
      </GridServiciosS1>
      <GridServiciosS2 container>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <ItemServicio>
            Arquitectura y construcción
          </ItemServicio>
          <ItemServicio>
            Diseño
          </ItemServicio>
          <ItemServicio>
            Mobiliario
          </ItemServicio>
          <ItemServicio>
            Visual Merchandising
          </ItemServicio>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <Image name='ImageServicios.jpg' />
          <Divisor />
          <Text>
            La arquitectura comercial se ha convertido en una sofisticada estrategia de marketing,
            a través de ella podemos incrementar el valor de tu marca y destacar tus productos entre
            la densa oferta comercial.
          </Text>
        </Grid>
      </GridServiciosS2>
    </>
  )
}
