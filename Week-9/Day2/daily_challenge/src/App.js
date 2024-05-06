import { useState } from 'react'
import './App.css';




function App() {

  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ])
  const voteForLanguage = (e, i) => {
    const newArr = [...languages]
    newArr[i].votes++
    setLanguages(newArr)

    // setLanguages()

  }


  return (
    <div className="App">
      <header className="App-header">
        {languages.map((item, i) => {
          return <div key={i} className='language'>
            <div>
              {item.votes}
            </div>
            <div>
              {item.name}
            </div>
            <div>
              <button onClick={(e) => voteForLanguage(e, i)} >Click Here</button>
            </div>
          </div>
        })}
      </header>
    </div>
  );
}

export default App;
