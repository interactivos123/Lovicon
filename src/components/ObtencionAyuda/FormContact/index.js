import React, { useState } from 'react'
import { InputLabel, TextField, FormControlLabel, Typography, Checkbox } from '@material-ui/core'
import { MyFormControl, MySelect, Form, ButtonForm, ContainerMessageSent, Title, TextSent, MyBox } from './styles'
import { useInput } from '../../../hooks/useInput'
import { PopUp } from '../../generals/PopUp'
import { IconMessageSent } from '../../icons/IconMessageSent'
import { Link } from 'gatsby'

export const FormContact = () => {
  const name = useInput('')
  const lastName = useInput('')
  const empresa = useInput('')
  const tel = useInput('')
  const email = useInput('')
  const cargo = useInput('')
  const terms = useInput('')
  const country = useInput('')
  const help = useInput('')

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
    <MyBox display='flex' justifyContent='center' width='100%' py={{ sm: 0, md: 4 }} px={{ sm: 0, md: 6 }} mt={{ sm: 3, md: -20 }}>

      <MyFormControl variant='outlined' fullWidth>
        <Form action='https://formspree.io/mlepkkeg' method='POST' onSubmit={submitForm}>
          <TextField id='name' label='Nombres' name='Nombres' variant='outlined' margin='normal' value={name.value} onChange={name.onChange} required />
          <TextField id='lastName' label='Apellidos' name='Apellidos' variant='outlined' margin='normal' value={lastName.value} onChange={lastName.onChange} required />
          <TextField id='empresa' label='Nombre de la empresa' name='Nombre de la empresa' variant='outlined' margin='normal' value={empresa.value} onChange={empresa.onChange} required />
          <MyFormControl variant='outlined' fullWidth required>
            <InputLabel htmlFor='cargo' color='primary'>Cargo</InputLabel>
            <MySelect
              native
              id='cargo'
              inputProps={{ name: 'Cargo', id: 'cargo', value: cargo.value, onChange: cargo.onChange }}
              label='Cargo'
              color='primary'
            >
              <option aria-label='None' value='' />
              <option value='Cargo 1'>Cargo 1</option>
              <option value='Cargo 2'>Cargo 2</option>
              <option value='Cargo 3'>Cargo 3</option>
            </MySelect>
          </MyFormControl>
          <TextField type='tel' id='telefono' label='Teléfono' name='Teléfono' variant='outlined' margin='normal' value={tel.value} onChange={tel.onChange} required />
          <TextField type='email' id='email' label='Correo electrónico' name='_replyto' variant='outlined' margin='normal' required value={email.value} onChange={email.onChange} />
          <TextField id='country' label='País o región' name='País o región' variant='outlined' margin='normal' value={country.value} onChange={country.onChange} required />
          <TextField id='help' label='¿Cómo podemos prestarle ayuda?' name='¿Cómo podemos prestarle ayuda?' variant='outlined' margin='normal' value={help.value} onChange={help.onChange} required />
          <FormControlLabel
            control={
              <Checkbox color='primary' required value={terms.value} onChange={terms.onChange} />
            }
            margin='normal'
            label={<Typography color='primary'>Me gustaría recibir información, consejos y ofertas sobre soluciones para empresas y organizaciones, y otros productos y servicios de Lovicon. <Link to='/tratamiento-de-datos/'>Declaración de privacidad</Link></Typography>}
          />
          <ButtonForm>Enviar Mensaje</ButtonForm>
        </Form>
      </MyFormControl>
      <PopUp open={open} setOpen={setOpen} name={name} empresa={empresa} email={email} tel={tel} terms={terms}>
        <MessageSent name={name.value} />
      </PopUp>
    </MyBox>
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
