import { useState, createContext, useRef, useEffect } from 'react'
import './App.css'


function App() {
  const divRef = useRef();
  const h2Ref = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log(divRef.current);
    divRef.current.style.color = 'red'
  }, [])

  const changeToBlue = () => {
    h2Ref.current.style.color = 'blue'
  }

  const handleChange = (e) => {
    inputRef.current = e.target.value;
    console.log(inputRef.current);
  }

  return (
    <>
      <div ref={divRef}>
        <h2 ref={h2Ref}>useRef</h2>
        <button onClick={changeToBlue}>changeToBlue</button>
        <div>
          <input onChange={(e) => handleChange(e)} ref={inputRef} />
        </div>
      </div>
    </>
  )
}

export default App
