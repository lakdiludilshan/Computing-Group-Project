import React, { useState, isOpen } from 'react'
import '../css/sidebar.css'
import { FaUserAlt, 
    FaRegChartBar, 
    FaCommentAlt, 
    FaBars, 
    FaTh, 
    FaShoppingBag, 
    FaThList } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const SideBar = ({Children}) => {
    const[isopen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const menuItems = [
        {
            name: 'Dashboard',
            path: '/admin/dashboard',
            icon: <FaTh/>,
        },
        {   
            name: 'Dashboard',
            path: '/admin/dashboard/upload',
            icon: <FaUserAlt/>,
        },
        {
            name: 'Upload Book',
            path: '/admin/dashboard/manage',
            icon: <FaRegChartBar/>,
        },
        {
            name: 'Manage Books',
            path: '/admin/dashboard/edit',
            icon: <FaCommentAlt/>,
        },
        {
            name: 'Manage Books',
            path: '/admin/dashboard/site',
            icon: <FaShoppingBag/>,
        },
        {
            name: 'Manage Books',
            path: '/admin/dashboard/wish',
            icon: <FaThList/>,
        },
    ]
  return (
    <div className='container'>
        <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
            <div className='top_section'>
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{Children}</main>
    </div>
  )
}

export default SideBar
