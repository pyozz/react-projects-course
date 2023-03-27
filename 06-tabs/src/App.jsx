import { useEffect, useState } from 'react'
import Buttons from './Buttons'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const fetchJobs = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(url)
      const responseData = await response.json()
      setJobs(responseData)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <Buttons
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
