import React, { useEffect, useRef } from 'react'
import { Typography } from '@material-ui/core'
import { MyTypographyNumero, MyGrid } from './styles'
import { useCountUp } from 'react-countup'

export const Numero = ({ number, description }) => {
  const { countUp, start } = useCountUp({
    start: 0,
    end: number,
    duration: 3,
    startOnMount: false,
    delay: 3
  })

  const element = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        start()
      }
    })

    observer.observe(element.current)

    // return observer.disconnect()
  }, [element])

  return (
    <MyGrid item ref={element}>
      <MyTypographyNumero variant='subtitle1' color='textSecondary' align='center'>
        {countUp}
      </MyTypographyNumero>
      <Typography variant='body2' color='textSecondary' align='center'>{description}</Typography>
    </MyGrid>
  )
}
