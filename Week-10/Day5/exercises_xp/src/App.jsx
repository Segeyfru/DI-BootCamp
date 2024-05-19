import { useState } from 'react'
import './App.css'
import Books from './features/books/Books'

function App() {
  const [count, setCount] = useState(0)
  
  const [genre, setGenre] = useState('')

  return (
    <>
    <select onChange={(e)=>setGenre(e.target.value)}>
      <option value="all">All</option>
      <option value="fiction">Science Fiction</option>
      <option value="fantasy">Fantasy</option>
      <option value="romance">Romance</option>
    </select>
      <Books genre={genre}/>
    </>
  )
}

export default App
