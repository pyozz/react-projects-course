import React from 'react'

function Buttons({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => (
        <button
          className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
          onClick={() => setCurrentItem(index)}
          key={job.id}
          type="button"
        >
          {job.company}
        </button>
      ))}
    </div>
  )
}

export default Buttons
