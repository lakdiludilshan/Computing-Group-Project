import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Card, Spinner } from 'flowbite-react';
//import { AuthContext } from '../../contexts/AuthProvider';

export default function Shop() {
  //const {loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  // fetching data
  useEffect(() => {

    const searchParams = new URLSearchParams(location.search);
    setSearchKeyword(searchParams ? searchParams.get("q") : "");


    fetch("http://localhost:5000/book/allBooks", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!searchKeyword) {
          setAllBooks(data.books);
        } else {
          // Filter books based on the keyword
          const filteredBooks = data.books.filter(
            (book) =>
              book.bookTitle.toLowerCase().includes(searchKeyword.toLowerCase()) ||
              book.authorName.toLowerCase().includes(searchKeyword.toLowerCase())
          );
          setAllBooks(filteredBooks);
        }
      });
  }, [searchKeyword, location.search]);

  console.log(allBooks);

  // loader
  //   if (loading) {
  //     return <div className="text-center mt-28">
  //         <Spinner aria-label="Center-aligned spinner example" />
  //     </div>
  // }
  const token = localStorage.getItem("jwt");

  const tokenVerify = () => {
    if (token) {
      alert("Book added");
      window.location.href = "https://www.paypal.com/us/signin";
    } else {
      navigate("/signIn");
    }
  };

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">
        All Books are Available Here
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {allBooks &&
          allBooks?.map((book) => (
            <div key={book._id}>
              <img src={book.imageUrl} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-600">
                <p>{book.authorName}</p>
              </p>

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={tokenVerify}
              >
                Buy Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
