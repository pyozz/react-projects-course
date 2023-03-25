import React, { useState } from 'react'
import data from './data'
import Questions from './Questions'

function App() {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleActiveId = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <Questions
        questions={questions}
        toggleActiveId={toggleActiveId}
        activeId={activeId}
      />
    </main>
  )
}

export default App
