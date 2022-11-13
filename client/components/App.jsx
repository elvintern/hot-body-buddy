import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Goal from './pages/Goal'
import Routine from './pages/Routine'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/goal" element={<Goal />} />
          <Route path="/signup/goal/routine" element={<Routine />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
