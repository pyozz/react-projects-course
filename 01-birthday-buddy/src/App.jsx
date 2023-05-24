import React, { useState } from 'react'
import data from './data'
import UserList from './UserList'

const App = () => {
  const [users, setUsers] = useState(data)

  const usersClearHandler = () => {
    setUsers([])
  }

  const fetchUsersHandler = () => {
    setUsers(data)
  }

  return (
    <main>
      <section className="container">
        <h3>{users.length} birthdays today</h3>

        <UserList users={users} />

        <button
          className="btn btn-block"
          onClick={users.length === 0 ? fetchUsersHandler : usersClearHandler}
          type="button"
        >
          {users.length === 0 ? 'refetch' : 'clear all'}
        </button>
      </section>
    </main>
  )
}
export default App
