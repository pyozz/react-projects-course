import React, { useState } from 'react'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Form from './components/Form'
import ColorList from './components/ColorList'

function App() {
  const [colors, setColors] = useState(new Values('#0081ff').all(10))

  const changeColors = (color) => {
    try {
      const newColors = new Values(color).all(10)
      setColors(newColors)
      toast.success('success !')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form setColors={setColors} changeColors={changeColors} />
      <ColorList colors={colors} />
      <ToastContainer />
    </main>
  )
}

export default App
