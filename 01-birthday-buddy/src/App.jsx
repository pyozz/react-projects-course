import React, { useState } from 'react'
import data from './data'
import UserList from './UserList'

const App = () => {
  const [users, setUsers] = useState(data)

  const usersClearHandler = () => {
    setUsers([])
  }

  return (
    <main>
      <section className="container">
        <h3>{users.length} birthdays today</h3>

        <UserList users={users} />

        <button
          className="btn btn-block"
          onClick={usersClearHandler}
          type="button"
        >
          clear all
        </button>
      </section>
    </main>
  )
}
export default App
