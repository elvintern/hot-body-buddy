import React, { useState, useEffect } from 'react'
import Login from '../items/Login'
import Quote from '../items/Quote'
import { fetchUsers } from '../../apiClient'

export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(() => users)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <Quote />
      <Login user={users} />
      {users.map((user) => {
        return <p key={user.id}>{user.userName}</p>
      })}
    </>
  )
}
