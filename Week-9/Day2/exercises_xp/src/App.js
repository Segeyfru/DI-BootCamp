import Car from './components/Car';
import Garage from './components/Garage';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import './App.css';


const carinfo = {name: "Ford", model: "Mustang"};



function App() {
  return (
    <div className="App">
      {/* <hr/>
      Exercise 1
      <hr/>
      <Car {...carinfo} />
      <Garage size={'small'} />
      <hr/>
      Exercise 2
      <hr/>
      <Events />
      <hr/>
      Exercise 3
      <hr/>
      <Phone /> */}
      <hr/>
      Exercise 4
      <hr/>
      <Color />
    </div>
  );
}

export default App;
