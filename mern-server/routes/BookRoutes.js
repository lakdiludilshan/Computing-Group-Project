const express  =require("express");
const BookController = require("../controller/BookController")

const router = express.Router();

router.post("/book/addBook",BookController.addBook);
router.get("/book/allBooks",BookController.getAllBooks);
router.put("/book/updateBook/:id",BookController.updateBooks);
router.delete("/book/deleteBook/:id",BookController.deleteBook);

module.exports = router