// import Hello from './components/Hello';
// import HelloClass from './components/HelloClass';
import Users from './components/Users';
import { useState, useEffect } from 'react'
import './App.css';

const App = () => {

  // const [state, setState] = useState()
  const [count, setCount] = useState(5);
  const [name, setName] = useState('Jack');
  const [users, setUsers] = useState([]);
  // this.state.count

  useEffect(() =>{
    console.log('useEffect3');
    if(count===0){
      setCount(count + 30)
    }
  },[count])


  const addOne = (num) => {
    setCount(count + num)
    setName('Dan')
    setUsers([])
    //this.setState({count: this.state.count + num})
  }
  const getUsers = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await resp.json()
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => addOne(1)}> + </button>
        {count}
        {name}
        <button onClick={() => addOne(-1)}> - </button>
        <div>
          <h2>Name Users:</h2>
          <button onClick={getUsers}>Get Users</button>
          {users
            ? users.map((item, i) => {
              return <div key={i}>{item.name}</div>
            }) : null
          }
        </div>
      </header>
    </div>
  )
}


export default App;
