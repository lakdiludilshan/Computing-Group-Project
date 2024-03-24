import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleBook from './components/SingleBook'

function App() {

  return (
    <>
      <Navbar/>
      <div className='min-h-screen pt-20'>
        <Outlet/>
      </div>
      
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App
