import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Title } from '../../../../theme'
import { ListItem } from '../../../generals/ListItem'

export const Ventajas = () => {
  return (
    <Box my={5} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Title>
            ¿Cuáles son las ventajas de tener
            un espacio optimizado para compra
            online y recogida en tienda?
          </Title>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box mt={[2.5, 2.5, 31.25]}>
            <ListItem>
              Elimina el tiempo de espera desde que el cliente realiza la compra en la plataforma virtual
              y lo recibe en su casa.
            </ListItem>
            <ListItem>
              Aumenta la conversión en la tienda.
            </ListItem>
            <ListItem>
              Elimina costes de entrega.
            </ListItem>
            <ListItem>
              Aumenta la relación del cliente con tu marca.
            </ListItem>
            <ListItem>
              Incrementa el tamaño del ticket medio al pasar a recoger sus pedidos hechos en linea.
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
