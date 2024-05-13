import React from "react";
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UploadBook = () => {

  const navigate = useNavigate();

  const [uploadData,setUploadData] = useState({})
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

 const changevalue = (e)=>{
  setUploadData({
    ...uploadData,
    [e.target.name]:e.target.value
  })
 }

 const token = localStorage.getItem("jwt")

 const handleData = async(e)=>{
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/book/addBook",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
      body:JSON.stringify(uploadData)
    })

    const data = await response.json();
    console.log(data)
      toast.success("Book added success vist shop page",{
        duration:3000,
        position:"top-right"
      })
      navigate("../")
      setUploadData(data);
    

  } catch (error) {
    console.log(error)
  }
 }

 useEffect(()=>{
  if(!token){
    navigate("/signIn")
  } },[])

  return (
    <div className="px-4 my-5 w-full">
      <h2 className="mb-4 text-3xl font-bold">Upload a Book</h2>

      <form
        onSubmit={handleData}
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
                name="bookTitle"  onChange={changevalue}
                className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter Book Title"
              />
            </div>

            <div className="lg:w-1/2 py-2">
              <div className="mb-2 block">
                <label htmlFor="bookTitle">Author Name</label>
              </div>
              <input
                type="text"
                id="authorName"
                name="authorName"  onChange={changevalue}
                className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter Author Name"
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
                name="imageUrl"  onChange={changevalue}
                className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter Book Image Url"
              />
            </div>

            <div className="lg:w-1/2 py-2">
              <div className="mb-2 block">
                <label htmlFor="inputState">Book Category</label>
              </div>
              <select
                name="category"
                id="inputState" onChange={changevalue}
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
            name="bookDescription"  onChange={changevalue}
            className="w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Write your Book Description"
            rows={4}
          />
        </div>

        <div className="py-2">
          <div className="mb-2 block">
            <label htmlFor="bookPdfUrl">Book PDF Url</label>
          </div>
          <input
            type="text"
            id="bookPdfUrl"
            name="bookPdfUrl"  onChange={changevalue}
            className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            placeholder="Enter Book PDF Url"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded"
        >
          Upload Book
        </button>
      </form>
    </div>
  );
};

export default UploadBook;
