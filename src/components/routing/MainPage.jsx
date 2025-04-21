import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'

function MainPage() {
  return (
    
        <Router>
            <nav>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>|
                <Link to="/user/101">User</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/user/:id' element={<User/>} />
            </Routes>
        </Router>
    
  )
}

export default MainPage