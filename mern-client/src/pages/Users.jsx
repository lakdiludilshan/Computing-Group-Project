import React from 'react'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Users = () => {
    const navigate = useNavigate();

    const [userData,setUserData] = useState([]);

    const fetchData = async()=>{
        try {
            const token = localStorage.getItem("jwt");
            if(token){
                const response = await fetch("http://localhost:5000/user/allusers",{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":`Bearer ${token}`
                    }
                })

                const data = await response.json();
                setUserData(data)
                console.log(data)
            }else{
                toast.error("You need to sign in",{
                    duration:3000,
                    position:"top-right"
                })
                navigate("/signIn")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='pt-5'>
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {userData.users?.map((person) => (
            <li className=' shadow-lg flex justify-center items-center rounded-lg' key={person._id}>
              <div className="flex items-center gap-x-6">
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Username : {person.username}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Email : {person.email}</p>
                </div>

              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Users
