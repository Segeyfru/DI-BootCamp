import { useState, useEffect } from 'react'
import './App.css'


const sendData = async (e) => {
  const body = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  }

  e.preventDefault()
  const url = 'https://webhook.site/8375af1d-d618-4c55-b2ea-c9b152ed0830'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function App() {

  return (
    <>
      <button onClick={sendData}>SEND data</button>

    </>
  )
}

export default App
