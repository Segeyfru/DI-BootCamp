import { useState, createContext } from 'react'
import CreateTodo from './components/CreateTodo.jsx'
import './App.css'

export const CreateTodoContext = createContext()

function App() {
  const [todos,setTodos] = useState([
    {id:0,name:'todo',checked:true,edit:false}
  ])

  return (
    <>
     <h1>To-Do list</h1>
      <CreateTodoContext.Provider value={{todos,setTodos}} >
        <CreateTodo />
      </CreateTodoContext.Provider>
    </>
  )
}

export default App
