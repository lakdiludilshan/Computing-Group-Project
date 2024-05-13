import React from 'react'
import SideBar from "../dashboard/SideBar";
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='grid grid-cols-12 h-screen overflow-auto'>
      <div className='border-4  col-span-2'><SideBar/></div>
      <div className='border-2  col-span-10'><Outlet/></div>
    </div>
  )
}

export default DashboardLayout
