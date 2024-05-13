const mongoose = require("mongoose");

const BookModel = new mongoose.Schema({
    bookTitle:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    bookDescription:{
        type:String,
        required:true
    },
    bookPdfUrl:{
        type:String,
        required:true
    }
})

const book = mongoose.model("books",BookModel);

module.exports = book;