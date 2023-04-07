import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, removeTodo, editTodo }) {
  return (
    <div className="items">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
