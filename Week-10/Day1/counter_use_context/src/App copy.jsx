import { useState, createContext } from 'react'
import './App.css'
import Display from './components/Display'
import Action from './components/Action'


export const AppContext = createContext();


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <h3>useContext / createContext</h3>
      <h2>Counter</h2>
      <AppContext.Provider value={{ count, setCount,name:'zivush' }}>
        <Display />
        <Action />
      </AppContext.Provider>
    </>
  )
}

export default App
