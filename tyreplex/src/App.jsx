import { useState } from 'react'

import './App.css'
import './index.css'
import AssignmentPage from './Pages/AssignmentPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import 'swiper/css';
import Navbar from './Components/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<AssignmentPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>


      {/* <AssignmentPage /> */}
    </>
  )
}

export default App
