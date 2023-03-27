import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FaAngleDoubleRight } from 'react-icons/fa'

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty) => (
        <div className="job-desc" key={uuidv4()}>
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </div>
  )
}

export default Duties
