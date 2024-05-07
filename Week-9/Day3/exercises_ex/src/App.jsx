import { useState } from 'react'
import Exercise_1 from './exercises/Exercise_1'
import Exercise_2 from './exercises/Exercise_2'
import DailyChallenge from './exercises/DailyChallenge'
import './App.css'

function App() {

  return (
    <div className='container'>
      {/* HI */}
      {/* <Exercise_1 /> */}
      {/* <Exercise_2 /> */}
      <DailyChallenge />
    </div>
  )
}

export default App
