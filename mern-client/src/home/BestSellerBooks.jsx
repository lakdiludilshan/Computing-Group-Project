import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/books").then(res => res.json()).then(data => {
          console.log("books fetched")
          console.log(data)
          // reverse the array to get the latest books
          data.reverse(); 
        setBooks(data)
    }
        )
    },[])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks
