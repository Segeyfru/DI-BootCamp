import { useState } from 'react'
import './App.css'
import Counter from './features/counter/Counter'
import Users from './features/users/Users'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Redux Toolkit</h2>
      {/* <Counter /> */}
      <Users />
    </>
  )
}

export default App
