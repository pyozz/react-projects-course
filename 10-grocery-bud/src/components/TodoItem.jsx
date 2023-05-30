import React from "react";

function TodoItem({ todo, removeTodo, editTodo }) {
  return (
    <div className="grocery-item">
      <div className="wrapper">
        <input
          className="edit-btn"
          type="checkbox"
          checked={todo.completed}
          onChange={() => editTodo(todo.id)}
        />
        <p
          className="title"
          style={{ textDecoration: todo.completed && "line-through" }}
        >
          {todo.title}
        </p>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={() => removeTodo(todo.id)}
      >
        delete
      </button>
    </div>
  );
}

export default TodoItem;
