import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast';
import { useLoaderData, useParams ,useNavigate} from 'react-router-dom'

const EditBook = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl} = useLoaderData();
  const bookCategories = [
    "Action and Adventure",
    "Anthology",
    "Classic",
    "Comic and Graphic Novel",
    "Crime and Detective",
    "Drama",
    "Fable",
    "Fairy Tale",
    "Fan-Fiction",
    "Fantasy",
    "Historical Fiction",
    "Horror",
    "Humor",
    "Legend",
    "Magical Realism",
    "Mystery",
    "Mythology",
    "Programming",
    "Realistic Fiction",
    "Romance",
    "Satire",
    "Science Fiction (Sci-Fi)",
    "Short Story",
    "Suspense/Thriller",
    "Tall Tale",
    "Western",
  ];

  const [selectedBookCategory, setSelectedBookCategory] =
    useState("bookCategories[0]");

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //handle book submition
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };

    // console.log(bookObj);
    // Update book data
    fetch(`http://localhost:5000/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":`Bearer ${token}`
      },
      body: JSON.stringify(updateBookObj),
    }).then((res) => res.json())
      .then((data) => {
        toast.success("Book updated",{
          duration:3000,
          position:"top-right"
        })
      });

  };

  useEffect(()=>{
    const token = localStorage.getItem("jwt");
    if(!token){
      navigate("/signIn")
    }
  })

  return (
    <div className="px-4 my-5 w-full">
      <h2 className="mb-4 text-3xl font-bold">Edit Book</h2>

      <form
        onSubmit={handleUpdate}
        className="flex w-full gap-2 flex-col"
      >
        <div>
          <div className="flex gap-5 items-center justify-between">
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <label htmlFor="bookTitle">Book Title</label>
              </div>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter Book Title"
                defaultValue={bookTitle}
              />
            </div>

            <div className="lg:w-1/2 py-2">
              <div className="mb-2 block">
                <label htmlFor="bookTitle">Author Name</label>
              </div>
              <input
                type="text"
                id="authorName"
                name="authorName"
                className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter Author Name"
                defaultValue={authorName}
              />
            </div>
          </div>

          <div className="flex gap-5 items-center justify-between">
            <div className="lg:w-1/2 py-2">
              <div className="mb-2 block">
                <label htmlFor="imageUrl">Book Image Url</label>
              </div>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter Book Image Url"
                defaultValue={imageUrl}
              />
            </div>

            <div className="lg:w-1/2 py-2">
              <div className="mb-2 block">
                <label htmlFor="inputState">Book Category</label>
              </div>
              <select
                name="category"
                id="inputState"
                value={selectedBookCategory}
                onChange={handleChangeSelectedValue}
                className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="mb-2 block">
            <label htmlFor="bookDescription">Book Description</label>
          </div>
          <textarea
            type="text"
            id="bookDescription"
            name="bookDescription"
            className="w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Write your Book Description"
            rows={4}
            defaultValue={bookDescription}
          />
        </div>

        <div className="py-2">
          <div className="mb-2 block">
            <label htmlFor="bookPdfUrl">Book PDF Url</label>
          </div>
          <input
            type="text"
            id="bookPdfUrl"
            name="bookPdfUrl"
            className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter Book PDF Url"
            defaultValue={bookPdfUrl}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}

export default EditBook

