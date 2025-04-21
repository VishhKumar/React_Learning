import React, { useState } from 'react'
import { CreateContextExample } from './CreateContextExample'

function ProvideContextExplanle({children}) {
  const [userName, setUserName] = useState('Salemon Boi')
  return (
    <CreateContextExample.Provider value={userName}>
      {children}
    </CreateContextExample.Provider>
  )
}

export default ProvideContextExplanle