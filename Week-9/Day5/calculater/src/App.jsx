import { useState } from 'react'
import './App.css'

function App() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [operator, setOperator] = useState('')
  const [answer, setAnswer] = useState('')

  const getMath = (e) => {

    e.preventDefault()
    if (operator === '+') {
      setAnswer(<h2>{x} {operator} {y} = {x + y} </h2>)
    } else if (operator === '-') {
      setAnswer(<h2>{x} {operator} {y} = {x - y} </h2>)
    } else if (operator === '*') {
      setAnswer(<h2>{x} {operator} {y} = {x * y} </h2>)
    } else if (operator === '/') {
      setAnswer(<h2>{x} {operator} {y} = {x / y} </h2>)
    }
    e.target.first.value = ''
    e.target.second.value = ''
    e.target.operator.value = ''

  }


  return (
    <>
      <form onSubmit={getMath}>
        <input onChange={(e) => setX(e.target.value)} type="number" name='first' /><br />
        <select
          onChange={(e) => {
            console.log(e.target.value);
            setOperator(e.target.value)
          }}
          name="operator"
          id="">
          <option value="">Select operator</option>
          <option value={'+'}>+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select><br />
        <input onChange={(e) => setY(e.target.value)} type="number" name='second' /><br />
        <input type="submit" value="Submit" />
      </form>
      {answer}
    </>
  )
}

export default App
