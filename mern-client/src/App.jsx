import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        
        <Outlet/>
      </div>
      
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App
