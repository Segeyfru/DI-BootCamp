import { useState , useCallback, useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])



  const expensiveCalculation = (num)=>{
    for(let i= 0;i<1000000;i++){
      num++
    }
    return num
  }
  const calculation = expensiveCalculation(0)
  // const calculation = useMemo(()=>expensiveCalculation(0),[count])


  const increment = ()=>{
    setCount((count) =>count +1);
  }

  // const addTask =()=>{
  //   setTodos((todos) => [...todos,`new-task${todos.length}`])
  // }
  const addTask = useCallback(()=>{
    setTodos((todos) => [...todos,`new-task${todos.length}`])
  },[todos])

  return (
    <>
      <h2>counter {count}</h2>
      <button onClick={()=>increment()}> + </button>
    <Todo todos={todos} addTask={addTask} calculation={calculation} />
    </>
  )
}

export default App
