import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h4>this is lorem project</h4>

      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="lorem">Paragraps ?</label>
        <input
          id="amount"
          onChange={(e) => setCount(e.target.value)}
          type="number"
          value={count}
          min="0"
          max={data.length}
          step="1"
        />
        <button className="btn" type="submit">
          generator
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item) => (
          <p key={nanoid()}>{item}</p>
        ))}
      </article>
    </section>
  )
}

export default App
