import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

function Question({ id, title, info, toggleActiveId, activeId }) {
  const showInfo = id === activeId

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleActiveId(id)}>
          {showInfo ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
