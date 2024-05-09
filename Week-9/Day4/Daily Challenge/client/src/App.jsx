import { useState, useEffect } from 'react'
import './App.css'

const url = `http://localhost:3001/api`


function App() {
  const [fromServer, setFromServer] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    getall()
  }, [])
const getall= async()=>{
  try {
    const res = await fetch(url+'/hello')
    const data =await res.json()
    setFromServer(data.message)
    
  } catch (error) {
     console.log(error)
  }
}

const sendMessage = async(e)=>{
  e.preventDefault()

  const post = e.target.message.value
  console.log(post);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify({post})
  }

  try {
    const res = await fetch(url+'/world', options)
    const data = await res.text()
    setMessage(data)
    e.target.message.value = ''
  } catch (error) {
    console.log(error);
  }

}
  return (
    <>
      <h2>Hello From React </h2>
      <h3>{fromServer}</h3>

      <form onSubmit={sendMessage}>
        <input type="text" name='message' />
        <input type="submit" value="Send" />
      </form>
      <h2>{message}</h2>
    </>
  )
}

export default App
