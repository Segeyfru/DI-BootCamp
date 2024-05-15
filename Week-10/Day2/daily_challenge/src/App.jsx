import { useState,useEffect } from 'react';
import './App.css'
import './features/tasks/tasks.css'
import TaskCreate from './features/tasks/TaskCreate';
import TasksList from './features/tasks/TasksList';

function App() {
const [date,setDate] = useState('2024-05-14');
  
// useEffect(()=>{
//   console.log(date);
// },[date])

  return (
    <>
    <h2>List of: {date}</h2>
    <TaskCreate date={date} setDate={setDate} />
    <TasksList date={date} />

    </>
  )
}

export default App