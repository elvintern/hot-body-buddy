import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App
