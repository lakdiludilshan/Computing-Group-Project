import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link,useNavigate } from 'react-router-dom'

const ManageBooks = () => {
  const navigate = useNavigate()
  const [books, setAllBooks] = useState([])
  useEffect(() => {
    fetchBooks();
  }, [books])

  const token = localStorage.getItem("jwt");

  const fetchBooks = async () => {
    fetch('http://localhost:5000/book/allBooks')
      .then(res => res.json())
      .then(data => setAllBooks(data))
  }

        //delete book
        const handleDelete = async(id) => {
          console.log(id);
          await fetch(`http://localhost:5000/book/deleteBook/${id}`, {
            method: 'DELETE',
            headers:{
              "Content-Type":"application/json",
              "Authorization":`Bearer ${token}`
            }
          })
          .then(res => res.json()) 
          .then(data => {
            alert("Book Deleted Successfully!!")
            // setAllBooks(data);
            fetchBooks();
          })
        }


  useEffect(()=>{

    if(!token){
      toast.error("You need to sign in for access this page",{
        duration:3000,
        position:"top-right"
      })
      navigate("/signIn")
    }

  })

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Book</h2>

      {/*Table for book data */}
      <table className='min-w-full table-auto lg:w-[960px] border-2'>
        <thead>
          <tr className='border-2'>
            <th className='px-4 py-2'>Book Title</th>
            <th className='px-4 py-2'>Author Name</th>
            <th className='px-4 py-2'>Category</th>
            <th className='px-4 py-2'>Price</th>
            <th className='px-4 py-2'>Action</th>
          </tr>
        </thead>
        {
          books.books?.map(book => {
            return (
              <tbody key={book._id}>
                <tr>
                  <td className='border px-2 py-2'>{book.bookTitle}</td>
                  <td className='border px-2 py-2'>{book.authorName}</td>
                  <td className='border px-2 py-2'>{book.category}</td>
                  <td className='border px-2 py-2'>$590</td>
                  <td className='border px-2 py-2'>
                    <Link to={`/admin/dashboard/edit-book/${book._id}`}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded px-2'>
                      Edit
                    </button> </Link>
                    <button onClick={() => handleDelete(book._id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2  rounded px-2'>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          })
        }
      </table>

    </div>
  )

}

export default ManageBooks
