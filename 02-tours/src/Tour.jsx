import React, { useState } from 'react'

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <span className="tour-price">${price}</span>

      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)} ...`}
          <button
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
            type="button"
            style={{ marginLeft: '0.5rem' }}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>

        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
          type="button"
        >
          not intereseted
        </button>
      </div>
    </article>
  )
}

export default Tour
