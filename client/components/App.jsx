import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
