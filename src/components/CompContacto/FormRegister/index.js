import React, { useState } from 'react'
import { Box, InputLabel, TextField, FormControlLabel, Typography, Checkbox } from '@material-ui/core'
import { MyFormControl, MySelect, Form, ButtonForm, ContainerMessageSent, Title, TextSent } from './styles'
import { useInput } from '../../../hooks/useInput'
import { PopUp } from '../../generals/PopUp'
import { IconMessageSent } from '../../icons/IconMessageSent'
import { Link } from 'gatsby'

export const FormRegister = () => {
  const name = useInput('')
  const empresa = useInput('')
  const email = useInput('')
  const tel = useInput('')
  const typeUser = useInput('')
  const terms = useInput('')

  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setOpen(true)
        setStatus('success')
        console.log('enviado')
      } else {
        setStatus('error')
      }
    }
    xhr.send(data)
  }

  return (
    <Box display='flex' justifyContent='center' width='100%' mt={2.5}>

      <MyFormControl variant='outlined' fullWidth>
        <Form action='https://formspree.io/mlepkkeg' method='POST' onSubmit={submitForm}>
          <TextField id='name' label='Nombre' name='Nombre' variant='outlined' margin='normal' value={name.value} onChange={name.onChange} />
          <TextField id='empresa' label='Empresa' name='Empresa' variant='outlined' margin='normal' value={empresa.value} onChange={empresa.onChange} />
          <TextField type='email' id='email' label='Email' name='_replyto' variant='outlined' margin='normal' required value={email.value} onChange={email.onChange} />
          <TextField type='tel' id='telefono' label='Teléfono' name='Teléfono' variant='outlined' margin='normal' value={tel.value} onChange={tel.onChange} />
          <MyFormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='typeUser' color='primary'>Sobre que tema desea recibir asesoría</InputLabel>
            <MySelect
              native
              id='typeUser'
              inputProps={{ name: 'Tema', id: 'typeUser', value: typeUser.value, onChange: typeUser.onChange }}
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
          <FormControlLabel
            control={
              <Checkbox color='primary' required value={terms.value} onChange={terms.onChange} />
            }
            margin='normal'
            label={<Typography color='primary'>Estoy deacuerdo con los <Link to='/tratamiento-de-datos'>Términos y Condiciones</Link></Typography>}
          />
          <ButtonForm>Enviar Mensaje</ButtonForm>
        </Form>
      </MyFormControl>
      <PopUp open={open} setOpen={setOpen} name={name} empresa={empresa} email={email} tel={tel} typeUser={typeUser} terms={terms}>
        <MessageSent name={name.value} />
      </PopUp>
    </Box>
  )
}

const MessageSent = ({ name }) => {
  return (
    <ContainerMessageSent>
      <IconMessageSent />
      <Title variant='h3'>Mensaje Enviado!</Title>
      <TextSent>
        Gracias por tu mensaje <b>{`${name}`}</b>,
        responderemos lo más pronto posible.
      </TextSent>
    </ContainerMessageSent>
  )
}
