import React from 'react'

function TodoItem({ todo, removeTodo, editTodo }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => editTodo(todo.id)}
      />
      <p style={{ textDecoration: todo.completed && 'line-through' }}>
        {todo.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeTodo(todo.id)}
      >
        delete
      </button>
    </div>
  )
}

export default TodoItem
