import { useState, useReducer, useRef } from 'react'
import './App.css'
import Counter from './components/Counter'

export const initialState = {
  count: 0,
  tasks: [
    { name: 'todo' }
  ],

}

/** Action */

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_TASK = 'add_task'
const DELETE = 'delete'
const CHANGE = 'change'

export const reducer = (state, action) => {
  // if (action.type === INCREMENT) {
  //   return { ...state, count: state.count + 1 }
  // } else if (action.type === DECREMENT) {
  //   return { ...state, count: state.count - 1 }
  // }
  // return state
  console.log(action.payload);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };

    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ADD_TASK:
      const newTasks = [...state.tasks]
      newTasks.push({ name: action.payload })
      return { ...state, tasks: newTasks }
    case DELETE:
      const delTasks = [...state.tasks]
      delTasks.splice(action.payload, 1)
      return { ...state, tasks: delTasks }
    case CHANGE:
      const changeTasks = [...state.tasks]
      changeTasks[action.id]={name:action.payload} 
      return { ...state, tasks: changeTasks }
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  let nameRef = useRef('');

  const addTask = () => {
    dispatch({ type: ADD_TASK, payload: nameRef.current.value })
    nameRef.current.value = "";
  }
  const changeTask = (i) => {
    dispatch({ type: CHANGE, payload: nameRef.current.value, id:i })
    nameRef.current.value = "";
  }
  return (
    <>
      {/* <div className='card'>
        <h2>React - useState</h2>
        <button onClick={() => setCount((count) => count + 1)}> + </button>
        count is {count}
        <button onClick={() => setCount((count) => count - 1)}> - </button>
      </div>
      <div className='card'>
        <h2>React - useReducer</h2>
        <button onClick={() => dispatch({ type: INCREMENT , payload:10})}> + </button>
        count is {state.count}
        <button onClick={() => dispatch({ type: DECREMENT, payload:5 })}> - </button>
      </div> */}
      <div>
        <h2>Task</h2>
        <input ref={nameRef} />
        <button onClick={(e) => addTask(e)}>Add task</button>
        {
          state.tasks.map((item, i) => {
            return (
              <div key={i} style={{ display: 'flex', width:"400px" }}>
                <h3 >{item.name}</h3>
                <button onClick={()=>changeTask(i)}>Change</button>
                <button onClick={(e) =>dispatch({ type: DELETE, payload: i })} >Delete</button>
              </div>
            )
          })
        }
      </div>
      <Counter />
    </>
  )
}

export default App
