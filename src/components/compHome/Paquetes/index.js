import React from 'react'
import { ContenedorPadre, LineaHorizontal } from '../../../theme'
import { Grid, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import { Target } from './Target'
import { Background } from './styles'

export const PaquetesComp = ({ noTitulo }) => {
  return (
    <Background>
      <ContenedorPadre>
        <Box pt={15}>
          {!noTitulo &&
            <Box pb={5} display='flex' justifyContent='center'>
              <LineaHorizontal />
              <Typography variant='h1' color='primary'>Paquetes de Inversión</Typography>
            </Box>}
          <Grid container>
            <Grid item sm={3}>
              <Target
                title='New Store'
                description='Ideal para marcas nuevas que van a construir su primer punto de venta físico.'
              >
                <List>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño interior y exterior de la tienda.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Planimetría de productos.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño de mobiliario, iluminación y señalética .</ListItemText>
                  </ListItem>
                </List>
              </Target>
            </Grid>
            <Grid item sm={3}>
              <Target
                title='Expansion Store'
                description='Ideal para marcas nuevas que van a construir su primer punto de venta físico.'
              >
                <List>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño interior y exterior de la tienda.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Planimetría de productos.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño de mobiliario, iluminación y señalética .</ListItemText>
                  </ListItem>
                </List>
              </Target>
            </Grid>
            <Grid item sm={3}>
              <Target
                title='Renovation Store'
                description='Ideal para marcas nuevas que van a construir su primer punto de venta físico.'
              >
                <List>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño interior y exterior de la tienda.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Planimetría de productos.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño de mobiliario, iluminación y señalética .</ListItemText>
                  </ListItem>
                </List>
              </Target>
            </Grid>
            <Grid item sm={3}>
              <Target
                title='Strategy Store'
                description='Ideal para marcas nuevas que van a construir su primer punto de venta físico.'
              >
                <List>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño interior y exterior de la tienda.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Planimetría de productos.</ListItemText>
                  </ListItem>
                  <ListItem alignItems='flex-start'>
                    <ListItemIcon><Check color='primary' /></ListItemIcon>
                    <ListItemText>Diseño de mobiliario, iluminación y señalética .</ListItemText>
                  </ListItem>
                </List>
              </Target>
            </Grid>
          </Grid>
        </Box>
      </ContenedorPadre>
    </Background>
  )
}
