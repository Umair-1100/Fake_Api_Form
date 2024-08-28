import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {


  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<Add/>} />
    <Route path="/edit/:id" element={<Edit />} />
  </Routes>  
  )
}

export default App
