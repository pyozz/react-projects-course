import React from 'react'
import Question from './Question'

function Questions({ questions, toggleActiveId, activeId }) {
  return (
    <section className="container">
      <h1>Questions</h1>

      {questions.map((question) => (
        <Question
          key={question.id}
          toggleActiveId={toggleActiveId}
          activeId={activeId}
          {...question}
        />
      ))}
    </section>
  )
}

export default Questions
