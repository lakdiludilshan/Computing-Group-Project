import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams();
  console.log(id)
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/oneBook/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        setBookData(data.book);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Hello single page</h1>
      {bookData && bookData ? (
        <div>
          <h1>{bookData.bookTitle}</h1>
          <p>Author: {bookData.authorName}</p>
          {/* Render other book details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBook;
