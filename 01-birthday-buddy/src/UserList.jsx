import React from 'react'
import UserItem from './UserItem'

function UserList({ users }) {
  return (
    <section>
      {users.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </section>
  )
}

export default UserList
