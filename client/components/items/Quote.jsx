import React, { useEffect, useState } from 'react'
import { fetchFruits } from '../../apiClient'

export default function Quote() {
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
      <p className="quote">No Pain No Gain</p>
    </>
  )
}
