import { useState } from 'react'
import TasksList from './features/tasks/TasksList'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TasksList />
    </>
  )
}

export default App
