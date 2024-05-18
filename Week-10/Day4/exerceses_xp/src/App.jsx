import { useState } from 'react'
import './App.css'
import Users from './features/users/Users'
import AgeCounter from './features/counter/AgeCounter'


function App() {

  return (
    <>
      <AgeCounter />
      <Users />
    </>
  )
}

export default App
