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
  const navigate = useNavigate()
  useEffect(()=>{
console.log(query);
  },[query])

  const searchImg =(e)=>{
    e.preventDefault()
  
    navigate(`/${query}`)
  }

  return (
    <>
      <h1>SnapShot</h1>
      <form action="" onSubmit={(e) =>searchImg(e)} >
        <input onChange={(e) =>setQuery(e.target.value)} type="text" placeholder="Search..." />
        <input type="submit" value="Search" />
      </form>
      <header><nav>
        <Link to={'/'}></Link>{' '}
        <Link to={'/mountains'}>Mountain</Link>{' '}
        <Link to={'/beaches'}>Beaches</Link>{' '}
        <Link to={'/birds'}>Birds</Link>{' '}
        <Link to={'/food'}>Food</Link>{' '}
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
        path: '/:search',
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
