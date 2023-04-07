import React, { useState } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Form({ addTodo }) {
  const [newTodo, setNewTodo] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!newTodo) {
      toast.error('error')

      return
    }
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button className="btn" type="submit">
          submit
        </button>
      </div>
    </form>
  )
}

export default Form
