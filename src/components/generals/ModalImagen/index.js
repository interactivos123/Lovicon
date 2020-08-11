import React from 'react'
import Image from '../../image'
import { Fade } from '@material-ui/core'
import { ContainerImageModal, ContainerModal, MyModal, MyClose } from './styles'
import CloseIcon from '@material-ui/icons/Close'

export const ModalImagen = ({ name }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
    console.log(open)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <ContainerImageModal>
      <button onClick={handleOpen}>
        <Image name={name} />
      </button>
      <MyModal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Fade in={open}>
          <ContainerModal>
            <MyClose onClick={handleClose}>
              <CloseIcon />
            </MyClose>
            <Image name={name} />
          </ContainerModal>
        </Fade>
      </MyModal>
    </ContainerImageModal>
  )
}
