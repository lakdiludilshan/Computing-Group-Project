import React from 'react'
import { useState } from 'react';



const UploadBook = () => {
  const bookCategories = [
    'Action and Adventure',
    'Anthology',
    'Classic',
    'Comic and Graphic Novel',
    'Crime and Detective',
    'Drama',
    'Fable',
    'Fairy Tale',
    'Fan-Fiction',
    'Fantasy',
    'Historical Fiction',
    'Horror',
    'Humor',
    'Legend',
    'Magical Realism',
    'Mystery',
    'Mythology',
    'Programming',
    'Realistic Fiction',
    'Romance',
    'Satire',
    'Science Fiction (Sci-Fi)',
    'Short Story',
    'Suspense/Thriller',
    'Tall Tale',
    'Western',
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState('bookCategories[0]');

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);}

    //handle book submition
    const handleBookSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageUrl = form.imageUrl.value;
      const category = form.category.value;
      const bookDescription = form.bookDescription.value;
      const bookPdfUrl = form.bookPdfUrl.value;

      const bookObj = {
        bookTitle,
        authorName,
        imageUrl,
        category,
        bookDescription,
        bookPdfUrl
      }

      console.log(bookObj);

      //send data to the db
      fetch("http://localhost:5000/addbook", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(bookObj)
        }).then(res => res.json()) .then(data => {
      //console.log(data)
      alert("Book Uploaded Successfully!!")
      form.reset();
      })
    }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className='flex lg:w-[1180px] flex flex-wrap gap-4 flex-col' >
        <div>

        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
          <label htmlFor="bookTitle">Book Title</label>
          </div>
          <input  
              type="text" 
              id="bookTitle" 
              name='bookTitle' 
              className='w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder="Enter Book Title" />
        </div>
        
        <div className='lg:w-1/2 py-2'>
          <div className='mb-2 block'>
          <label htmlFor="bookTitle">Author Name</label>
          </div>
          <input  
              type="text" 
              id="authorName" 
              name='authorName' 
              className='w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder="Enter Author Name" />
        </div>

        <div className='lg:w-1/2 py-2'>
          <div className='mb-2 block'>
          <label htmlFor="imageUrl">Book Image Url</label>
          </div>
          <input  
              type="text" 
              id="imageUrl" 
              name='imageUrl' 
              className='w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder="Enter Book Image Url" />
        </div>

        <div className='lg:w-1/2 py-2'>
          <div className='mb-2 block'>
          <label htmlFor="inputState" >Book Category</label>
          </div>
          <select name="category" id="inputState" value={selectedBookCategory}
          onChange={handleChangeSelectedValue}
          className='w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'>
            {bookCategories.map((option) => 
              <option key={option} value={option}>{option}</option>
            )}
          </select>
          </div>
        </div>

        <div className='lg:w-1/2 py-2'>
          <div className='mb-2 block'>
          <label htmlFor="bookDescription">Book Description</label>
          </div>
          <textarea  
              type="text" 
              id="bookDescription" 
              name='bookDescription' 
              className='w-full p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder="Write your Book Description"
              rows={4} />
        </div>

        <div className='lg:w-1/2 py-2'>
          <div className='mb-2 block'>
          <label htmlFor="bookPdfUrl">Book PDF Url</label>
          </div>
          <input  
              type="text" 
              id="bookPdfUrl" 
              name='bookPdfUrl' 
              className='w-full p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              placeholder="Enter Book PDF Url" />
        </div>
        <button type='submit' className='lg:w-1/2 mt-5 bg-blue-700 text-white py-2 px-4 rounded'>
          Upload Book
        </button>

      </form>
    </div>
  )
}


export default UploadBook
