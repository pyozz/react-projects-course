import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number < 0) return people.length - 1
    if (number > people.length - 1) return 0

    return number
  }

  const prevPerson = () => {
    setIndex((state) => {
      return checkNumber(state - 1)
    })
  }

  const nextPerson = () => {
    setIndex((state) => {
      return checkNumber(state + 1)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) randomNumber + 1

    setIndex(checkNumber(randomNumber))
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div>
          <button className="prev-btn" type="buitton" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" type="buitton" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button
          className="btn btn-hipster"
          type="button"
          onClick={randomPerson}
        >
          random
        </button>
      </article>
    </main>
  )
}
export default App
