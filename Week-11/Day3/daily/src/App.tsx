import { useRef, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import './App.css'
import List from './components/List'
import { Todo } from './components/type'

function App() {
  const textRef = useRef<HTMLInputElement>(null)
  const [todos,setTodos] = useState<Todo[]>([])
  const renderItems = () => { }

  const addTask = ()=>{
    const text = textRef.current?.value.trim() ||''
    if(text==='') return
    const newtodo:Todo = {text,id:nanoid()}
    setTodos([...todos,newtodo])
    textRef.current!.value = ''
  }
  return (
    <>
      <input type="text" ref={textRef} />
      <button onClick={()=>addTask()}>Add</button>
      <List items={todos } renderItems={(todo:Todo )=>(<span>{todo.text}</span>)} />
    </>
  )
}

export default App
