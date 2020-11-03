import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid, Typography, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core'
import IconList from '../../../icons/IconList'
import { ContainerList } from './styles'
import { FormContact } from '../FormContact'

export const Contacto = () => {
  return (
    <ContenedorPadre my={{ xs: 5, lg: 10 }}>
      <Grid container alignItems='flex-start'>
        <Grid item sm={12} md={7}>
          <Box pr={{ xs: 0, sm: 5 }}>
            <Typography variant='body2'>
            Hable con un especialista en ventas de Lovicon para obtener respuestas a las preguntas que pueda tener si está evaluando construir    una    nueva tienda, comenzando su primer proyecto o renovando su local.
            Los especialistas en ventas proporcionan:
            </Typography>

            <ContainerList>
              <ListItem>
                <ListItemIcon>
                  <IconList />
                </ListItemIcon>
                <ListItemText>
                Ayuda con el diseño de una solución para alcanzar sus objetivos comerciales.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <IconList />
                </ListItemIcon>
                <ListItemText>
                Guía para crear un concepto de tienda.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <IconList />
                </ListItemIcon>
                <ListItemText>
                Información sobre planimetrias y Visual Merchandising.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <IconList />
                </ListItemIcon>
                <ListItemText>
                Información sobre precios y optimización de costos.
                </ListItemText>
              </ListItem>
            </ContainerList>

            <Typography variant='body2'>
            Háblenos un poco sobre su marca y descríbanos brevemente su proyecto. Un miembro del equipo de Lovicon se comunicará con usted en breve.
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={5}>
          <FormContact />
        </Grid>
      </Grid>
    </ContenedorPadre>
  )
}
