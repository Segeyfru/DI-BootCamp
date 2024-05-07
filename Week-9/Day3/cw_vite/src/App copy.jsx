import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Test from './components/Test'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(()=>{
    console.log('useEffect', show,show2);
    if(show){
      fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err))
    }
    
  },[show,show2])
  return (
    <>
      <h2>Hello</h2>
      <button onClick={()=>{setShow(!show)}}>Show</button>
      <button onClick={()=>{setShow2(!show2)}}>Show2</button>
      {
        show || show2 || null || console.log('pidr')
      }
    </>
  )
}

export default App
