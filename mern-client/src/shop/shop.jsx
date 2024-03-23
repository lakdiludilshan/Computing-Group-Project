import React, { useContext, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
// import { Card, Spinner } from 'flowbite-react';
//import { AuthContext } from '../../contexts/AuthProvider';

export default function Shop() {
  //const {loading } = useContext(AuthContext);

  const navigate = useNavigate()
  const [allBooks, setAllBooks] = useState([]);
// fetching data
  useEffect(() =>{


    fetch('http://localhost:5000/book/allBooks',{
      headers:{
        "Content-Type":"application/json",
      }
    })
    .then(res => res.json())
    .then(data => setAllBooks(data))
  }, []);

  console.log(allBooks);
  console.log(allBooks.books)

    // loader
  //   if (loading) {
  //     return <div className="text-center mt-28">
  //         <Spinner aria-label="Center-aligned spinner example" />
  //     </div>
  // }
  useEffect(()=>{

  })

  return (
    <div className='my-28 px-4 lg:px-24'>
      <h2 className='text-3xl font-bold text-center mb-16 z-40'>All Books are Available Here</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
         {
            allBooks && allBooks.books?.map(book => (
              <div key={book._id}>
              <img src={book.imageUrl} alt="" className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <p>
                  {book.bookTitle}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-600">
                <p>
                  {book.authorName}
                </p>
              </p>

              <button className='px-4 py-2 bg-blue-600 text-white rounded'>Buy Now</button>
              </div>
            ))
          } 
        </div>
    </div>
  )
}
