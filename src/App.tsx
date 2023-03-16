import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Duplicates from './pages/Duplicates'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/validated" element={<Duplicates />}></Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
