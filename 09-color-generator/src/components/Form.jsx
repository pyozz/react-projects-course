import React, { useState } from 'react'

function Form({ changeColors }) {
  const [color, setColor] = useState('#0081ff')

  const colorSubmitHandler = (e) => {
    e.preventDefault()

    changeColors(color)
  }

  return (
    <section className="container">
      <h4>color generator</h4>

      <form className="color-form" onSubmit={colorSubmitHandler}>
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          style={{ backgroundColor: color }}
          value={color}
        />
        <input
          type="text"
          placeholder="#0081ff"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  )
}

export default Form
