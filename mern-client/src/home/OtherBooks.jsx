import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';


const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    const fetchData = async()=>{
      try {
        const response = await fetch("http://localhost:5000/book/allBooks",{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })

        const data = await response.json();
        if(data){
          setBooks(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks