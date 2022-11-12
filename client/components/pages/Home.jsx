import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h2>home page</h2>
      <Link to={'/login'}>Login</Link>
    </>
  )
}
