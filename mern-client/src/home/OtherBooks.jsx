import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';


const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/books").then(res => res.json()).then(data => {
          console.log("books fetched")
          console.log(data)
          setBooks(data.slice(4,8))
        setBooks(data)
    }
        )
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks