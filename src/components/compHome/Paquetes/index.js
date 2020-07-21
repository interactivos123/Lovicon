import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import { Target } from './Target'

export const Paquetes = () => {
  return (
    <ContenedorPadre>
      <Box py={5}>
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
  )
}
