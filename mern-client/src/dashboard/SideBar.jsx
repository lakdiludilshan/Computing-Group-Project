import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import '../css/sidebar.css'

function SideBar() {
    return (
        <div className='Container-fluid'>
            <div className='row'>
                <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100' style={{ width: '210px' }}>
                    <div className='mt-2'>
                        <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline' role='button'>
                            <span className='f5-4'>Admin Dashboard</span>
                        </a>
                        <hr className='text-white d-none d-sm-block'></hr>
                        <ul class="nav nav-pills flex-column mt-2 mt-sm-0" id='parentM'>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Dashboard</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-book'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Upload Book</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-files'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Manage Books</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-people'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Users</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#submenu" class="nav-link text-white text-center text-sm-start" data-bs-toggle="collapse" aria-current="page">
                                    <i className='bi bi-grid'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Products</span>
                                    <i className='bi bi-arrow-down-short ms-2'></i>
                                </a>
                                <ul class="nav collapse ms-2 flex-column" id='submenu' data-bs-parent="#parentM">
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="#" aria-current="page">
                                            <span className='d-none d-sm-inline'>Item </span>1
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" href="#">
                                        <span className='d-none d-sm-inline'>Item </span>2
                                        </a>
                                    </li>
                                </ul>
                                
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-arrow-right'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Sign in</span>
                                </a>
                            </li>
                            <li class="nav-item my-1 py-2 py-sm-0">
                                <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
                                    <i className='bi bi-backspace-fill'></i>
                                    <span className='ms-2 d-none d-sm-inline'>Log Out</span>
                                </a>
                            </li>
                        </ul>
                        
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
