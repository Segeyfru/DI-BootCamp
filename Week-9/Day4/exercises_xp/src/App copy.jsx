import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import ErrorBoundary from './components/ErrorBundary';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import Navigation from './components/Navigation';


const Root = () => {
  return (
    <>
      {/* <Navigation/> */}
      <header><nav>
        <NavLink to={'/'}>Home</NavLink>{' '}
        <NavLink to={'/profile'}>Profile</NavLink>{' '}
        <NavLink to={'/shop'}>Shop</NavLink>{' '}
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
        path: '/',
        element: <ErrorBoundary> <HomeScreen /> </ErrorBoundary>
      },
      {
        path: '/profile',
        element: <ErrorBoundary><ProfileScreen /></ErrorBoundary>
      },
      {
        path: '/shop',
        element:<> <ErrorBoundary><ShopScreen /></ErrorBoundary></>
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
