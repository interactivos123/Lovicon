import React from 'react'
import { GridData, Url, StyledListItem } from './styles'
import { Box, Grid, Typography, ListItemIcon, ListItemText } from '@material-ui/core'
import { Room, Phone, PhoneIphone, Email } from '@material-ui/icons'
import { FormRegister } from './FormRegister'
import { TitleSEO } from '../../theme'

export const CompContacto = () => {
  return (
    <Box mt={16} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Grid container>
        <GridData item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box mr={5}>
            <TitleSEO>Contacto</TitleSEO>
            <Box pt={2.5}>
              <Typography>
                En Lovicon somos fans de las tiendas físicas, nos especializamos en la
                <b> construcción de locales comerciales </b>
                para todas las categorías y en mejorar la comunicación y exhibición de tus productos
                en tu punto de venta.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Url href='https://goo.gl/maps/LxGzhipR69VnMsZV7' target='_blank'>
              <StyledListItem>
                <ListItemIcon><Room color='primary' /></ListItemIcon>
                <ListItemText color='primary'>Cra 27 C # 71 B 70. Bogotá-Colombia.</ListItemText>
              </StyledListItem>
            </Url>
            <Url href='tel:5715472239' target='_blank'>
              <StyledListItem>
                <ListItemIcon><Phone color='primary' /></ListItemIcon>
                <ListItemText color='primary'>(571) 5472239</ListItemText>
              </StyledListItem>
            </Url>
            <Url href='tel:573182664538' target='_blank'>
              <StyledListItem>
                <ListItemIcon><PhoneIphone color='primary' /></ListItemIcon>
                <ListItemText color='primary'>318 2664538</ListItemText>
              </StyledListItem>
            </Url>
            <Url href='mailto:comercial@loviconbrand.com' target='_blank'>
              <StyledListItem>
                <ListItemIcon><Email color='primary' /></ListItemIcon>
                <ListItemText color='primary'>comercial1@loviconretail.co</ListItemText>
              </StyledListItem>
            </Url>
          </Box>
        </GridData>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <FormRegister />
        </Grid>
      </Grid>
    </Box>
  )
}
