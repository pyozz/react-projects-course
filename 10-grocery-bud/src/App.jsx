import React, { useState } from 'react'
import Form from './components/Form'

import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import TodoList from './components/TodoList'

const defaultTodos = JSON.parse(localStorage.getItem('todos') || '[]')

const setLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function App() {
  const [todos, setTodos] = useState(defaultTodos)

  const addTodo = (todoTitle) => {
    const newTodo = {
      id: nanoid(),
      title: todoTitle,
      completed: false,
    }
    const newTodos = [...todos, newTodo]

    setTodos(newTodos)
    setLocalStorage(newTodos)

    toast.success('success')
  }

  const removeTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodo)
    setLocalStorage(filteredTodo)
  }

  const editTodo = (id) => {
    const edittedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }

      return todo
    })

    setTodos(edittedTodo)
    setLocalStorage(edittedTodo)
  }

  return (
    <section className="section-center">
      <ToastContainer />
      <Form addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </section>
  )
}

export default App
