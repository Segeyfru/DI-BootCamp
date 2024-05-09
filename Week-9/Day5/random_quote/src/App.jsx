import { useState, useEffect } from 'react'
import './App.css'
import quotes from '../public/QuotesDatabase'

function App() {

  // const randomNum = 91
  const [randomNum, setRandomNum] = useState(91)
  const [randomQuote, setRandomQuote] = useState({})
  const [randomCollor, setRandomCollor] = useState('')

  useEffect(() => {
    getRandomQuote()
    getRandomCollor()
  }, [])

  const getRandomCollor = () => {
    const newRandomCollor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    setRandomCollor(newRandomCollor)
  }

  const getRandomQuote = () => {
    const newRandomNum = Math.floor(Math.random() * quotes.length)
    console.log(newRandomNum);
    let flag = true
    while (flag) {
      if (newRandomNum === randomNum) {
        console.log('in if');
        newRandomNum = Math.floor(Math.random() * quotes.length)
      } else{
        console.log('in else');
        setRandomNum( newRandomNum)
        flag = false
      }
    }

    console.log(quotes[randomNum]);

    const randQuote = { ...quotes[randomNum] }
    if (!randQuote.author) {
      randQuote.author = 'Unknown'
    }
    setRandomQuote(randQuote)
  }

  const newQuote = (e) => {
    getRandomQuote()
    getRandomCollor()
  }

  return (
    <div className='root' style={{ backgroundColor: `${randomCollor}`, color: `${randomCollor}` }}>
      <div className='container'>
        <div style={{display:'flex',flexDirection:'column',alignItems: 'flex-end'}}>
        <h2>"{randomQuote.quote}"</h2>
        <h4>-{randomQuote.author}-</h4></div>
        <button onClick={newQuote} style={{ backgroundColor: `${randomCollor}` }}>New quote</button>
      </div>
    </div>
  )
}

export default App
