import React from 'react'
import { Box } from '@material-ui/core'
import { MyButton } from './styles'

export const SiguientePaso = () => {
  return (
    <Box mt={10} mx={{ xs: 2.5, sm: 5, md: 8, lg: 12.5 }}>
      <Box display='flex' justifyContent='center' mt={[5, 17.5]}>
        <MyButton variant='contained' color='secondary'>
          Recuerda que ser  el primero siempre<br />
          te dará ventaja.
        </MyButton>
      </Box>
    </Box>
  )
}
