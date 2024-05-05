import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise from './components/Exercise3';

const element = <h1>I Love JSX</h1>
const sum = 5 + 5
const elementWithSum = <h2>React is {sum} times better with JSX</h2>

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      {element}
      {elementWithSum}
      <p>This is a list</p>
      <ul>
        {
        user.favAnimals.map((item, i )=> {
          console.log(item);
          console.log(i);
          return <UserFavoriteAnimals animal={item} key = {i} />
        })
       }
      </ul>
      <>
       {<Exercise/>}
      </>
      
    </div>
  );
}

export default App;
