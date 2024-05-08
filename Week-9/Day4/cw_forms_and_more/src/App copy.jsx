import { useState } from 'react'
import './App.css'
import Forms from './components/Form'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import Product from './components/Product'
import { Routes, Route , Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<><Forms /><hr /><About /></>} />
        <Route path='*' element={<><h2>404 not found</h2></>} />
      </Routes>
    </>
  )
}

export default App
