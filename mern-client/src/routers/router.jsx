import React from "react";
import {
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBook from "../dashboard/EditBook";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Users from "../pages/Users";
import { createBrowserRouter } from "react-router-dom";
import Product from "../dashboard/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/shop",
                element: <Shop/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/blog",
                element: <Blog/>,
            },
            {
                path: "/signIn",
                element: <SignIn/>,
            },
            {
                path: "/signUp",
                element: <SignUp/>,
            },
            {
                path:"/book/:id",
                element:<SingleBook/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/oneBook/${params.id}`)
            }                            
        
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks/>
            },
            {
                path: "/admin/dashboard/users",
                element: <Users/>
            },
            {
                path: "/admin/dashboard/product",
                element: <Product/>
            },
            {
                path: "/admin/dashboard/edit-book/:id",
                element: <EditBook/>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
            },
        ]
    }
]);

export default router;