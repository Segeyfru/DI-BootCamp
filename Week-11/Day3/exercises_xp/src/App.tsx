import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Usercard from './components/UserCard'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Greeting name={'Sergey'} />

      <h2>{count}</h2>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(count => count + 1)}>+</button>

      <Usercard name='Sergey' age={27} />
    </>
  )
}

export default App
