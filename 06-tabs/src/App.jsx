import { useEffect, useState } from 'react'
import Buttons from './Buttons'
import JobInfo from './JobInfo'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [jobs, setJobs] = useState()
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobs = async () => {
    try {
      const response = await fetch(url)
      const responseData = await response.json()
      setJobs(responseData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (!jobs) return null

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
