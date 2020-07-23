import React from 'react'
import { Box, InputLabel, TextField } from '@material-ui/core'
import { NavigateNext } from '@material-ui/icons'
import { MyFormControl, MySelect } from './styles'
import { LinkButton } from '../../components/generals/Link'

export const FormRegister = () => {
  return (
    <Box display='flex' justifyContent='center' width='100%' mt={2.5}>
      <MyFormControl variant='outlined' fullWidth>

        <TextField id='name' label='Nombre' variant='outlined' margin='normal' />
        <TextField id='empresa' label='Empresa' variant='outlined' margin='normal' />
        <TextField type='email' id='email' label='Email' variant='outlined' margin='normal' />
        <TextField type='tel' id='telefono' label='Teléfono' variant='outlined' margin='normal' />
        <MyFormControl variant='outlined' fullWidth>
          <InputLabel htmlFor='typeUser' color='primary'>Sobre que tema desea recibir asesoría</InputLabel>
          <MySelect
            native
            id='typeUser'
            inputProps={{ name: 'typeUser', id: 'typeUser' }}
            label='Sobre que tema desea recibir asesoría'
            color='primary'
          >
            <option aria-label='None' value='' />
            <option value='Visual Merchandasing'>Visual Merchandasing</option>
            <option value='Arquitectura'>Arquitectura</option>
            <option value='Diseño Interior'>Diseño Interior</option>
            <option value='Otro'>Otro </option>
          </MySelect>
        </MyFormControl>

        <Box mt={2.5}>
          <LinkButton href='/registro-exitoso' variant='contained' color='primary' fullWidth endIcon={<NavigateNext />}>Enviar mensaje</LinkButton>
        </Box>
      </MyFormControl>
    </Box>
  )
}
