import React from 'react'
import { ContenedorPadre, Title } from '../../../theme'
import { Box, Grid, Button } from '@material-ui/core'
import { MyButton, MyGridContainer } from './style'
import { Link } from 'gatsby'

export const ConstruirTuTienda = () => {
  return (
    <>
      <ContenedorPadre>
        <Box mt={15} mb={15}>
          <Title>¿Quieres construir tu tienda?</Title>
          <Box mt={8}>
            <Box mb={4}>
              <a href='callto:+573182664538'>
                <MyButton>Realiza una llamada inmediata</MyButton>
              </a>
            </Box>
            <a href='/'>
              <MyButton>Escribe a nuestro whatsApp Bussines. </MyButton>
            </a>
          </Box>
        </Box>
      </ContenedorPadre>
      <MyGridContainer container>

        <Grid item sm={3} xs={6}>
          <Link to='/arquitectura-y-construccion'>
            <Button>Arquitectura y construcción</Button>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/diseno'>
            <Button>Diseño </Button>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='/mobiliario'>
            <Button>Mobiliario </Button>
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to='visual-merchandasing'>
            <Button>Visual Merchandising</Button>
          </Link>
        </Grid>

      </MyGridContainer>
    </>
  )
}
