import React, { useEffect } from 'react'
import { GridServiciosS1, Title, GridServiciosS2, ItemServicio, Text, Divisor } from './style'
import { Grid, Box, Hidden } from '@material-ui/core'
import Image from '../../image'

export const ProductosYServicios = () => {
  useEffect(() => {
    const arquitectura = document.querySelector('#arquitectura')
    const diseno = document.querySelector('#diseno')
    const mobiliario = document.querySelector('#mobiliario')
    const visual = document.querySelector('#visual')

    const textArquitectura = document.querySelector('#textArquitectura')
    const textDiseno = document.querySelector('#textDiseno')
    const textMobiliario = document.querySelector('#textMobiliario')
    const textVisual = document.querySelector('#textVisual')

    textArquitectura.style.height = '100px'

    arquitectura.addEventListener('mouseover', () => {
      textArquitectura.style.height = '100px'
      textDiseno.style.height = '0px'
      textMobiliario.style.height = '0px'
      textVisual.style.height = '0px'
    })

    diseno.addEventListener('mouseover', () => {
      textArquitectura.style.height = '0px'
      textDiseno.style.height = '100px'
      textMobiliario.style.height = '0px'
      textVisual.style.height = '0px'
    })

    mobiliario.addEventListener('mouseover', () => {
      textArquitectura.style.height = '0px'
      textDiseno.style.height = '0px'
      textMobiliario.style.height = '100px'
      textVisual.style.height = '0px'
    })

    visual.addEventListener('mouseover', () => {
      textArquitectura.style.height = '0px'
      textDiseno.style.height = '0px'
      textMobiliario.style.height = '0px'
      textVisual.style.height = '100px'
    })
  })
  return (
    <>
      <GridServiciosS1 container>
        <Title>Nuestros Servicios</Title>
      </GridServiciosS1>
      <GridServiciosS2 container>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
          <ItemServicio id='arquitectura'>
            Arquitectura y construcción
          </ItemServicio>
          <ItemServicio id='diseno'>
            Diseño
          </ItemServicio>
          <ItemServicio id='mobiliario'>
            Mobiliario
          </ItemServicio>
          <ItemServicio id='visual'>
            Visual Merchandising
          </ItemServicio>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <Hidden smDown>
            <Image name='ImageServicios.jpg' />
          </Hidden>
          <Divisor />
          <Box minHeight='100px'>
            <Text id='textArquitectura'>
            La arquitectura comercial se ha convertido en una sofisticada estrategia de marketing,
            a través de ella podemos incrementar el valor de tu marca y destacar tus productos entre
            la densa oferta comercial.
            </Text>
            <Text id='textDiseno'>
            Además de los elementos arquitectónicos, el diseño de tiendas engloba múltiples componentes
            como muebles, iluminación, señalización, escaparates y piezas de comunicación que crean la
            tienda perfecta.
            </Text>
            <Text id='textMobiliario'>
            El mobiliario permite ubicar nuestro producto de forma atractiva, permite que el consumidor
            acceda a él fácilmente y nos da la posibilidad de jugar con materiales, formas y estilos
            para realzar los atributos del producto.
            </Text>
            <Text id='textVisual'>
            Creamos estrategias de exhibición y localización de prodcuctos que ayudan a potenciar las
            ventas y a tener un comercio mucho más rentable.
            </Text>
          </Box>
        </Grid>
      </GridServiciosS2>
    </>
  )
}
