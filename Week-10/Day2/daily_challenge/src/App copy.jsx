import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import ListOfTasks from './components/ListOfTasks'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
      <h2>form for tasks</h2>
      <Tasks />
      {/* <ListOfTasks /> */}


      {
        
      }
    </>
  )
}

export default App
