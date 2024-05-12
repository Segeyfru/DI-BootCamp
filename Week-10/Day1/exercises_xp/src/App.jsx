import { useState, createContext, useRef } from 'react'
import './App.css'
// import ThemeContext from './components/ThemeContext'
// import ChangeTheme from './components/ChangeTheme'
import CreateTodo from './components/CreateTodo'

// export const ChangeContext = createContext()
export const CreateTodoContext = createContext()

function App() {

  // // EXERCISE 1
  // const [light, setLight] = useState('Light')
  
  // // EXERCISE 2
  // const [inputLength, setInputLength] = useState(0)
  // const inputRef = useRef(null)
  
  
  // const handleInputChange = () => {
    //   const inputLength = inputRef.current.value.length
    //   console.log(inputLength);
    //   setInputLength(inputLength)
    // }
    
  // EXERCISE 3
  const [todos,setTodos] = useState([
    {id:0,name:'todo'}
  ])





  return (
    <>
      {/* <h1>Exercise 1</h1>
      <ChangeContext.Provider value={{ light, setLight }}>
        <div>
          <ThemeContext />
          <ChangeTheme />
        </div>
      </ChangeContext.Provider> */}

      {/* <h1>Exercise 2</h1>
      <textarea
      ref={inputRef}
      placeholder='Type something...'
      onChange={handleInputChange}
      >
      </textarea>
    <h4>CHarecter count: {inputLength}</h4> */}

      <h1>Exercise 3</h1>
      <CreateTodoContext.Provider value={{todos,setTodos}} >
        <CreateTodo />
      </CreateTodoContext.Provider>
    </>
  )
}

export default App
