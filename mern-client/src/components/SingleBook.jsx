import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();
  console.log(id);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/book/oneBook/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setBookData(data.book);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className=" w-full h-screen flex justify-center items-center mt-20 ">
      <img src="" alt="" />
      {bookData ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="flex justify-center items-center">
          <img
            className="w-[300px] h-[300px] object-cover "
            src={bookData.imageUrl}
            alt="Sunset in the mountains"
          />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{bookData.bookTitle}</div>
            <p className="text-gray-700 text-base">
              {bookData.bookDescription}
            </p>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
              {bookData.category}
            </p>

          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Comic
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Action
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Love
            </span>
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default SingleBook;
