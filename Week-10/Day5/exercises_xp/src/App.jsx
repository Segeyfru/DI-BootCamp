import { useState } from 'react'
import './App.css'
import Books from './features/books/Books'
import Tracker from './features/tracker/Tracker'
// import Trackerc from './features/tracker/Tracker copy'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      {/* <Books /> */}
      <Tracker />
    </>
  )
}

export default App
