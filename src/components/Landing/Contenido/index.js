import React from 'react'
import { ContenedorPadre } from '../../../theme'
import { Grid } from '@material-ui/core'
import Image from '../../image'
import { ListItem } from '../../generals/ListItem'
import { ContainerGrid, MyTitle, TextAnimation, MyBox, DescriptionBox } from './styles'

export const Contenido = () => {
  return (
    <ContenedorPadre mt={{ xs: 6, md: 8, lg: 12 }}>
      <ContainerGrid container>
        <Grid item xs={12} sm={12} md={6}>
          <MyTitle variant='h3'>
            Ahorra tiempo y dinero contrata un solo aliado estratégico
          </MyTitle>
          <ListItem><TextAnimation>Conceptualización de la tienda</TextAnimation></ListItem>
          <ListItem><TextAnimation>Diseño de la tienda </TextAnimation></ListItem>
          <ListItem><TextAnimation>Fabricación de mobiliario </TextAnimation></ListItem>
          <ListItem><TextAnimation>Construcción de la tienda </TextAnimation></ListItem>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Image name='1.jpg' description='Mac center' />
          <MyBox>
            <DescriptionBox variant='body1'>
              Cliente: Mac Center <br />
              Catgoría: Tecnología <br />
              Alcance: <br />
              <span>Construcción de tienda</span> <br />
              <span>Fabricación de mobiliario</span>
            </DescriptionBox>
          </MyBox>
        </Grid>
      </ContainerGrid>
    </ContenedorPadre>
  )
}
