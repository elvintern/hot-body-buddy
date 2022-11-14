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
          <li className="quote" key={fruit.id}>
            {fruit.name}
          </li>
        ))}
      </ul>
    </>
  )
}
