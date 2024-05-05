import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import users from './users.json'
import Users from './components/Users';
import 'tachyons'

function App() {
  return (
    <div className="App">
       {
        users.map((item, i )=> {
          return <Users info={item} key = {i} />
        })
       }
    </div>
  );
}

export default App;
