import { useState, useEffect } from 'react'
import Parent from './components/Parent'
import Child from './components/Child'
import Counter from './components/Counter'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'



function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      {/* <h2>Paretnt & Child</h2>
      <Parent auth={'adjmit'} >
      <Child />
      </Parent> */}
    <h2>Forms</h2>
    <form onSubmit={handleSubmit}>
      <input type='submit' value='Click To Submit'></input>
    </form>

      {/* <h2>Error Boundery</h2>
      <ErrorBoundary fallback={<p>Counter 1 was down</p>}>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>Counter 2 was down</p>}>
        <Counter />
      </ErrorBoundary> */}


    </>
  )
}

export default App
