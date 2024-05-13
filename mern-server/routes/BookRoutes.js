const express  =require("express");
const BookController = require("../controller/BookController")
const authMiddleware = require("../middleware/AuthMiddleware")

const router = express.Router();

router.post("/book/addBook",authMiddleware, BookController.addBook);
router.get("/book/allBooks",BookController.getAllBooks);
router.put("/book/updateBook/:id",authMiddleware,BookController.updateBooks);
router.delete("/book/deleteBook/:id",authMiddleware,BookController.deleteBook);
router.get("/book/oneBook/:id",BookController.oneBook);

module.exports = router