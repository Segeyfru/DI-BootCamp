import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './feattures/tasks/Tasks'
import DailyPlanner from './feattures/dailyPlaner/DailyPlanner'

function App() {

  return (
    <>
      {/* <Tasks /> */}
      <DailyPlanner/>
    </>
  )
}

export default App
