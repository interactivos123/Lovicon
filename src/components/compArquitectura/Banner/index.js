import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import { Indicador } from '../../generals/IndicadorPag'
import Image from '../../image'

export const Banner = () => {
  return (
    <Box mt={12} ml={12.5}>
      <Grid container>

        <Grid item xs={7}>
          <Box mb={5} mt={5}>
            <Indicador>Servicios/ Arquitectura y construcción</Indicador>
          </Box>
          <Typography variant='subtitle1' color='initial'>
            Construimos múltiples<br />
            formatos de tiendas<br />
            físicas
          </Typography>
        </Grid>

        <Grid item xs={5}>
          <Image name='ArquitecturaConstruccion.png' />
        </Grid>
      </Grid>
    </Box>
  )
}
