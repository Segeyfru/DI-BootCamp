import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Shop from './components/Shop'
import Products from './components/Products'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='product/:id' element={<Products />} />

    </Routes>
    </>
  )
}

export default App
