import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffects } from 'react'

const SingleBook = () => {

  const {id} = useParams();
  console.log(id)
  const [books,setBooks] = useState({});

  // const fetchData=async()=>{


  //   const response = await fetch(`http://localhost:5000/book/oneBook/${id}`,{
  //     method:"GET",
  //     headers:{
  //       "Content-Type":"application/json"
  //     }
  //   })

  //   const data = await response.json();
  //   console.log(data)

  //   setBooks(data)
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[id])
  return (
    <div>
      {books.book && <h1>{books.book.bookTitle}</h1>}
    </div>
  )
}

export default SingleBook
