import { useState } from 'react'
import './App.css'
import FromeStore from './components/FromeStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>Redux - Example</h2>
     <FromeStore />
    </>
  )
}

export default App
