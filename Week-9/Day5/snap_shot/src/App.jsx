import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css'
import Mountain from './components/Mountain';
import Beaches from './components/Beaches';
import Birds from './components/Birds';
import Food from './components/Food';
import Others from './components/Others';
import Logo from './components/Logo';


const Root = () => {
  const [query, setQuery] = useState('Mountain')
  const [count, setCount] =useState(20)
  const navigate = useNavigate()
  
  useEffect(()=>{
console.log(query);
  },[query])

  const searchImg =(e)=>{
    e.preventDefault()
  
    navigate(`/${query}/${count}`)
  }

  return (
    <>
      <h1>SnapShot</h1>
      <form action="" onSubmit={(e) =>searchImg(e)} >
        <input onChange={(e) =>setQuery(e.target.value)} type="text" placeholder="Search..." />
        <select onChange={(e)=> setCount(parseInt(e.target.value))} name="count" id="">
          <option value="">How many?</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <input type="submit" value="Search" />

      </form>
      <header><nav>
        <Link to={'/'}></Link>{' '}
        <Link to={`/mountains/${count}`}>Mountain</Link>{' '}
        <Link to={`/beaches/${count}`}>Beaches</Link>{' '}
        <Link to={`/birds/${count}`}>Birds</Link>{' '}
        <Link to={`/food/${count}`}>Food</Link>{' '}
      </nav></header>
      <Outlet />

    </>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h2>Opps...</h2>,
    children: [
      {
        path: '/:search/:count',
        element: <Mountain />
      },
    ]
  }])




function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
