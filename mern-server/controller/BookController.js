const BookModel = require("../model/BookModel");

// addBook
const addBook = async(request,response)=>{
    const {bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl} = request.body;
    try {
        const newBook = await BookModel.create({bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl});
        if(newBook){
            return response.status(201).json({
                message:"Book added successfully",
                book:newBook
            })
        }else{
            return response.status(500).json({
                message:"Book i not added"
            })
        }
    } catch (error) {
        return response.status(500).json({
            message:"Error occur",
            error:error.message
        })
    }

}

// getAllBooks
const getAllBooks = async(request,response)=>{
    try {
        const allBooks = await BookModel.find({});

        if(allBooks){
            return response.status(200).json({
                message:"fetching all books",
                books:allBooks
            })
        }else{
            return response.status(404).json({
                message:"no books found in database"
            })
        }
    } catch (error) {
        return response.status(500).json({
            message:"error occur",
            error:error.message
        })
    }
}

// update books
const updateBooks = async(request,response)=>{
    const {id} = request.params;
    try {
        const findBook = await BookModel.findById(id);
        if(findBook){
            const updatedBook = await BookModel.findByIdAndUpdate(id,request.body);
            if(updatedBook){
                return response.status(200).json({
                    message:"book updated successfully",
                })
            }else{
                return response.status(500).json({
                    message:"book is not updated"
                })
            }
        }else{
            return response.status(404).json({
                message:"book is not in db"
            })
        }
    } catch (error) {
        return response.status(500).json({
            message:"error occur",
            error:error.message
        })
        
    }
    
}

// deleteBooks
const deleteBook = async(request,response)=>{
    const {id}= request.params;
    try {
        const findBook = await BookModel.findById(id);
        if(findBook){
            const deleteBook = await BookModel.findByIdAndDelete(id);
            if(deleteBook){
                return response.status(200).json({
                    message:"book delete successfully"
                })
            }else{
                return response.status(500).json({
                    message:"book is not delete"
                })
            }
        }else{
            return response.status(404).json({
                message:"book is not in my db"
            })
        }
    } catch (error) {
        return response.status(500).json({
            message:"error occur",
            error:error.message
        })
    }
}

const oneBook = async(request,response)=>{
    const {id} = request.params;
    try {
        const findUser = await BookModel.findById(id)
        if(findUser){
            return response.status(200).json({
                message:"Fetching book",
                book:findUser
            })
        }else{
            return response.status(404).json({
                message:"book not found"
            })
        }
    } catch (error) {
        return response.status(500).json({
            message:"Error",
            error:error.message
        })
    }
}


module.exports = {addBook,getAllBooks,updateBooks,deleteBook,oneBook}