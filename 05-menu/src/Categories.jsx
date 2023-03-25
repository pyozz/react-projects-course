import React from 'react'

function Categories({ categories, filterMenuHandler }) {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          className="btn"
          key={category}
          type="button"
          onClick={() => filterMenuHandler(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories
