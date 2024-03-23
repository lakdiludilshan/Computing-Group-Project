import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast';

const SignIn = () => {

    const navigate = useNavigate();
    const [data,setData] = useState({});

    const changeValue = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleChange =async(e)=>{
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:5000/user/signin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })

            if(response.status === 200){
                const userData = await response.json();
                console.log(userData)
                localStorage.setItem("jwt",userData.jwt);
                if(userData){
                    toast.success("User login successfully",{
                        duration:3000,
                        position:'top-right'
                    })
                    navigate("/")
                    location.reload();
                }
            }
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6"  method="POST" onSubmit={handleChange}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required onChange={changeValue}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required onChange={changeValue}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to={"/signUp"} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default SignIn
