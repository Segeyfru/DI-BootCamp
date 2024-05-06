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
      count: 0
    }
    console.log('constructor');
  }
  setCount =(num)=>{
    this.setState({count: this.state.count + num })
    console.log(this.state.count);
  }
  
  componentDidMount = () =>{
    console.log("componentDidMount");
    this.setState({count: 15 });

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      this.setState({users: data})
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate = (prevProps, prevState) =>{
    console.log('componentDidUpdate', prevState);
    if(prevState.users.length > 0){
      this.setState({count:20})
    }
  }
  
  render(){
    console.log('render');
    return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => this.setCount(1)}> + </button>
        {this.state.count}
        <button onClick={() => this.setCount(-1)}> - </button>
        {
          this.state.users.map((item,i)=>{
            return <div key={i}> {item.name}</div>
          })
        }
      </header>
    </div>
  )
  }
  
}

export default App;
