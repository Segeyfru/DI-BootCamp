import { useState } from 'react'
import Forms from './components/Form'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import Product from './components/Product'
import './App.css'
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'


/** Routering */

const Root = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>{' '}
          <Link to={'/about'}>About</Link>{' '}
          <Link to={'/shop'}>Shop</Link>{' '}
        </nav>
      </header>
      <Outlet />
      <footer>
        copyright 2024 student of DI
      </footer>
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
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
