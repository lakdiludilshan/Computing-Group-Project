import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import '../css/sidebar.css'
import { Link,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

function SideBar() {
    const [auth,setAuth]=useState(false)

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("jwt")
        if(token){
            setAuth(true)
        }else{
            setAuth(false)
        }
    },[])

    const logOut = ()=>{
        localStorage.removeItem("jwt");
        navigate("/signIn");
    }

    return (
        <div className='w-full '>
            <div className='row'>
                <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100 fixed' style={{ width: '210px' }}>
                    <div className='mt-2'>
                        <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline' role='button'>
                            <span className='f5-4'>Admin Dashboard</span>
                        </a>
                        <hr className='text-white d-none d-sm-block'></hr>
                        {auth &&auth? <ul class="nav nav-pills flex-column mt-2 mt-sm-0" id='parentM'>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="/admin/dashboard" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="/admin/dashboard/upload" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-book'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Upload Book</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="/" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-book'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Home</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                 <a href="/admin/dashboard/manage" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-files'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Manage Books</span>
                                </a>
                            </li>

                            <li class="nav-item my-1 py-2 py-sm-0">
                                <Link to={"users"} href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-people'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Users</span>
                                </Link>
                            </li>

                            <li class="nav-item my-1 py-2 py-sm-0">
                                <Link to={"product"} class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Product</span>
                                </Link>
                            </li>

                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-backspace-fill'></i>
                                    <span className='ms-2 d-none d-sm-inline' onClick={logOut}>Log Out</span>
                                </a>
                            </li>
                        </ul>  : <ul class="nav nav-pills flex-column mt-2 mt-sm-0" id='parentM'>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="/admin/dashboard" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="/admin/dashboard/upload" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-book'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Upload Book</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="/" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-book'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Home</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                 <a href="/admin/dashboard/manage" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-files'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Manage Books</span>
                                </a>
                            </li>

                            <li class="nav-item my-1 py-2 py-sm-0">
                                <Link to={"users"} href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-people'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Users</span>
                                </Link>
                            </li>

                            <li class="nav-item my-1 py-2 py-sm-0">
                                <Link to={"product"} class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Product</span>
                                </Link>
                            </li>

                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-arrow-right'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Sign in</span>
                                </a>
                            </li>

                        </ul>}
                        
                    </div>
                    <div className="dropdown open">
                        <a
                            className="btn border-none dropdown-toggle text-white"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className='bi bi-person f5-4'></i><span className='f5-4 ms-3'>Dropdown</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideBar
