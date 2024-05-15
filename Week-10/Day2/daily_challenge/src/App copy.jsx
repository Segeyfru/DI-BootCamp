
import { adding, toggle, deleting, edit, toggleedit } from './redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import './App.css'
import ListOfTasks from './components/ListOfTasks'

function App() {

  const [date, setDate] = useState('2024-05-08')
  const days = useSelector((state) => state.toDoList.days)
  const dispatch = useDispatch()
  const inputRef = useRef()




  const print = () => {
    let result = days.filter(item => item.date === date)

    if (result.length > 0) {

      return (result[0].tasks.map((item, i) => {
        return (<div key={i}>
          <ul >
            {item.edit ? <input placeholder='Update task' defaultValue={item.task} onChange={(e) => dispatch(edit({ text: e.target.value, id: item.id }))} /> : <li>Task: {item.task}</li>}
            {item.complete ? <li>Complete: Yes</li> : <li>Complete: No</li>}
          </ul><br />
          <button onClick={() => dispatch(toggle(item.id))}>Change completion</button>
          {item.edit ? <button onClick={() => dispatch(toggleedit(item.id))}>Update</button> : <button onClick={() => dispatch(toggleedit(item.id))}>Edit</button>}
          <button onClick={() => dispatch(deleting(item.id))}>Delete</button>
        </div>)
      }))
    } else {

      return <h2>No tasks</h2>
    }

  }

  return (
    <>
      <h3>Choose a date: <input defaultValue="2024-05-08" type="date" onChange={(e) => setDate(e.target.value)} /></h3>
      <h2>Your tasks on: {date}</h2>
      {print()}
      <input ref={inputRef} type="text" placeholder='Input new Task' /><button onClick={() => dispatch(adding({ date: date, task: inputRef.current.value }))}>Add</button>
    </>
  )
}

export default App