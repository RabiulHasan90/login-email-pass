import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function Mainlayout() {
  return (
     <div>
        <Header />
        <Outlet />
    </div>
  )
}
