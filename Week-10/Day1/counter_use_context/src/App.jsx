import { useState, createContext, useRef, useEffect } from 'react'
import './App.css'


function App() {

  const [title, setTitle] = useState('Title')
  let name = 'Dan'
  const nameRef = useRef('Dan Ref')

  useEffect(() =>{
    
    name = 'aaa'
    nameRef.current = 'bbb'
    setTitle('ccc')
  })

  const changeName = () => {
    name = 'John'
    nameRef.current = 'John Ref'
    console.log(name);
    console.log(nameRef.current);
  }

  const changeTitle = () => {
    setTitle('Title title')
  }
  return (
    <>
      <div>
        <h1>{name}</h1>
        <button onClick={changeName}>Change Name</button>
      </div>

      <div>
        <h1>{nameRef.current}</h1>
        <button onClick={changeName}>Change NameRef</button>
      </div>
      <div>
        <h3>{title}</h3>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </>
  )
}

export default App
