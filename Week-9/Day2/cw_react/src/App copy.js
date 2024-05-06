// import Hello from './components/Hello';
// import HelloClass from './components/HelloClass';
import Users from './components/Users';
import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      users: [],
    }
  }
  getUsers = async (url) =>{
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users")
      const obj = await resp.json()
      console.log(obj);
      this.setState({users:obj})
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.getUsers}>Click Me</button>
        {
          this.state.users.map((item,i) =>{
            return <Users {...item} key={i} />
          })
        }
      </header>
    </div>
  )
  }
  
}

export default App;
