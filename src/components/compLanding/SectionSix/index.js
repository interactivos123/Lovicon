import React, { useState } from 'react'
import { TextField, FormControlLabel, Checkbox, Typography } from '@material-ui/core'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import SwiperStyles from 'swiper/swiper-bundle.min.css'
import { ContenedorPadre } from '../../../theme'
import { StyledSectionSix, Title, ContainerPlans, StyledPlan, ContainerBordePlan, ContainerPlan, ContainerListPlan, TitlePlan, ListItem, Precio, Descripcion, Button, ContainerForm, Anchor, Form, MyFormControl, TextPrivacyPolicy, ButtonForm, TitleForm, ContainerMessageSent, TextSent } from './styles'
import { Link } from 'gatsby'
import { useInput } from '../../../hooks/useInput'
import { PopUp } from '../../generals/PopUp'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { IconMessageSent } from '../../icons/IconMessageSent'

SwiperCore.use([Navigation])

const Plan = ({ children, Title, Price, Description }) => {
  return (
    <StyledPlan>
      <ContainerBordePlan>
        <TitlePlan>{Title}</TitlePlan>
        <ContainerPlan>
          <ContainerListPlan>
            {children}
          </ContainerListPlan>
          <Precio>
            {Price}
          </Precio>
        </ContainerPlan>
      </ContainerBordePlan>
      <Descripcion>
        {Description}
      </Descripcion>
      <AnchorLink to='/landing/#quiero-cotizar'>
        <Button>
          ADQUIRIR AHORA
        </Button>
      </AnchorLink>
    </StyledPlan>
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

const FormCotizar = () => {
  const name = useInput('')
  const lastName = useInput('')
  const company = useInput('')
  const phone = useInput('')
  const email = useInput('')
  const cargo = useInput('')
  const country = useInput('')
  const help = useInput('')
  const accept = useInput('')

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
    <>
      <MyFormControl variant='outlined' fullWidth id='quiero-cotizar'>
        <Form action='https://formspree.io/f/meqplyoj' method='POST' onSubmit={submitForm}>
          <TitleForm>
            Quiero cotizar
            Mi tienda
          </TitleForm>
          <Typography color='primary'>
            Todos los campos con * son obligatorios
          </Typography>
          <TextField id='name' label='Nombre' name='Nombre' variant='outlined' margin='normal' required value={name.value} onChange={name.onChange} />
          <TextField id='lastName' label='Apellidos' name='Apellidos' variant='outlined' margin='normal' required value={lastName.value} onChange={lastName.onChange} />
          <TextField id='company' label='Nombre de la empresa' name='Nombre de la empresa' variant='outlined' margin='normal' required value={company.value} onChange={company.onChange} />
          <TextField id='company' label='Cargo' name='Cargo' variant='outlined' margin='normal' required value={cargo.value} onChange={cargo.onChange} />
          <TextField id='phone' label='Teléfono' name='Teléfono' variant='outlined' margin='normal' required value={phone.value} onChange={phone.onChange} />
          <TextField type='email' id='email' label='Correo electrónico' name='Correo electrónico' variant='outlined' margin='normal' required value={email.value} onChange={email.onChange} />
          <TextField id='country' label='País o región' name='País o región' variant='outlined' margin='normal' required value={country.value} onChange={country.onChange} />
          <TextField id='help' label='¿Cómo podemos prestarle ayuda?' name='¿Cómo podemos prestarle ayuda?' variant='outlined' margin='normal' required value={help.value} onChange={help.onChange} />
          <TextPrivacyPolicy>
            Me gustaría recibir información, consejos y ofertas sobre soluciones para marcas, y otros
            productos y servicios de Lovicon.<br />
            <Link to='/tratamiento-de-datos/'>
              Declaración de privacidad
            </Link>
          </TextPrivacyPolicy>
          <FormControlLabel
            control={
              <Checkbox color='primary' required value={accept.value} onChange={accept.onChange} />
            }
            margin='normal'
            label={
              <Typography color='primary'>
                Acepto
              </Typography>
            }
          />
          <ButtonForm>Enviar</ButtonForm>
        </Form>
      </MyFormControl>
      <PopUp
        open={open}
        setOpen={setOpen}
        name={name}
        lastName={lastName}
        company={company}
        phone={phone}
        email={email}
        country={country}
        help={help}
        accept={accept}
      >
        <MessageSent name={name.value} />
      </PopUp>
    </>
  )
}

const SectionSix = () => {
  return (
    <StyledSectionSix>
      <ContenedorPadre>
        <Title color='#363131'>Un plan para cada etapa de su marca</Title>
        <ContainerPlans
          spaceBetween={0}
          navigation
          slidesPerView='auto'
          className={SwiperStyles}
        >
          <SwiperSlide>
            <Plan
              Title='Expansión'
              Price='Desde COP $ 2.500.000'
              Description='Para marcas en crecimiento'
            >
              <ListItem>Diseño arquitectónico</ListItem>
              <ListItem>Levantamiento arquitectónico</ListItem>
              <ListItem>Planos de construcción</ListItem>
            </Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan
              Title='Emprendedores'
              Price='Desde COP $ 7.850.000'
              Description='Para nuevas marcas '
            >
              <ListItem>Branding</ListItem>
              <ListItem>Diseño de tienda</ListItem>
              <ListItem>Diseño de mobiliario</ListItem>
              <ListItem>Diseño arquitectónico</ListItem>
              <ListItem>Levantamiento arquitectónico</ListItem>
              <ListItem>Planos de construcción</ListItem>
            </Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan
              Title='Renovación'
              Price='Desde COP $ 5.900.000'
              Description='Para marcas en renovación'
            >
              <ListItem>Rediseño de tienda</ListItem>
              <ListItem>Diseño de mobiliario</ListItem>
              <ListItem>Diseño arquitectónico</ListItem>
              <ListItem>Levantamiento arquitectónico</ListItem>
              <ListItem>Planos de construcción</ListItem>
            </Plan>
          </SwiperSlide>
        </ContainerPlans>
        <ContainerForm>
          <Title align='center'>
            ¿Con quién puedo hablar en caso de duda?
          </Title>
          <Anchor href='tel:573162664538'>
            Llame al personal de ventas
            +57 3162664538
          </Anchor>
          <FormCotizar />
        </ContainerForm>
      </ContenedorPadre>
    </StyledSectionSix>
  )
}

export default SectionSix
