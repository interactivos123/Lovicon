import { useState } from 'react'

export const useInput = (initialValue) => {
  const [value, setvalue] = useState(initialValue)
  const onChange = (e) => setvalue(e.target.value)
  const reset = () => setvalue('')

  return { value, onChange, reset }
}
