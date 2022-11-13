import React, { useState, useEffect } from 'react'
import Login from '../items/Login'
import Quote from '../items/Quote'
import { fetchFruits } from '../../apiClient'

export default function Home() {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    fetchFruits()
      .then((fruits) => {
        setFruits(() => fruits)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
      <Quote />
      <Login />
    </>
  )
}
