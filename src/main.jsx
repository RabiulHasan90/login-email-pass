import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Mainlayout from './Mainlayout'
import Home from './components/Home'
import Login from './components/logreg/Login'
import Register from './components/logreg/Register'
import Heroregister from './components/logreg/Heroregister'

const router = new createBrowserRouter([{
  path: "/",
  element: <Mainlayout />,
  children: [{
    path: "/",
    element:<Home />
  },
    {
      path: "/login",
      element: <Login />
    },
     {
      path: "/register",
      element: <Register />
    },
      {
      path: "/heroreg",
      element: <Heroregister />
  }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
