import React, { useEffect } from 'react'
import { Overlay, ContainerPopUp, ButtonClose } from './styles'
import { Close } from '../../icons/Close'

const ClosePopUp = (setOpen, name, empresa, email, tel, typeUser, terms, lastName, company, phone, country, help, accept) => {
  setOpen(false)
  if (name && empresa && email && tel && typeUser) {
    name.reset()
    empresa.reset()
    email.reset()
    tel.reset()
    typeUser.reset()
    terms.reset()
  }
  if (name && lastName && company && phone && email && country && help && accept) {
    name.reset()
    lastName.reset()
    company.reset()
    phone.reset()
    email.reset()
    country.reset()
    help.reset()
    help.reset()
    accept.reset()
  }
}

const ComponentPopUp = ({ children, setOpen, name, empresa, email, tel, typeUser, terms, lastName, company, phone, country, help, accept }) => {
  console.log(setOpen)
  useEffect(() => {
    const overlay = document.querySelector('#overlay')
    overlay.addEventListener('click', (e) => {
      if (e.target.id === 'overlay') {
        ClosePopUp(setOpen, name, empresa, email, tel, typeUser, terms, lastName, company, phone, country, help, accept)
      }
    })
  })

  return (
    <Overlay id='overlay'>
      <ContainerPopUp>
        <ButtonClose onClick={() => ClosePopUp(setOpen, name, empresa, email, tel, typeUser, terms, lastName, company, phone, country, help, accept)}>
          <Close />
        </ButtonClose>
        {children}
      </ContainerPopUp>
    </Overlay>
  )
}

export const PopUp = (props) => {
  return (
    <>
      {props.open &&
        <ComponentPopUp
          {...props}
        />}
    </>
  )
}
