const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
require("dotenv").config();


const userRouter = require("./routes/UserRoutes");
const UserModel = require("./model/UserModel");

// Middleware
app.use(cors());
app.use(express.json());

//1234

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb configuration


// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://admin:12345@cluster0.vhmmmo4.mongodb.net/mernbook";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
//   connectTimeoutMS: 20000,
//   socketTimeoutMS: 20000
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     //create a collection of documents
//     const bookcollection = client.db("mernbook").collection("books");

//     // insert a book to the db : post method
//     app.post('/addbook', async (req, res) => {
//       const newBook = req.body;
//       const result = await bookcollection.insertOne(newBook);
//       res.send(result);
//     });

//     // get all books from the db : get method
//     // app.get('/books', async (req, res) => {
//     //   const cursor = bookcollection.find({});
//     //   const books = await cursor.toArray();
//     //   res.send(books);
//     // });

//     // update a book in the db : patch or update method
//     app.patch('/update/:id', async (req, res) => {
//         const id = req.params.id;
//         // console.log(id);
//         const updatedBookData = req.body;
//         const filter = { _id: new ObjectId(id)};
//          const updateDoc = {
//           $set: {
//             ...updatedBookData
//           },
//         }
//         const options = { upsert: true };

//         // update
//         const result = await bookcollection.updateOne(filter, updateDoc, options);
//         res.send(result);
//     }); 

//     // delete a book from the db : delete method
//     app.delete('/delete/:id', async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id)};
//       const result = await bookcollection.deleteOne(filter);
//       res.send(result);
//     });

//     // find by category
//     app.get('/books', async (req, res) => {
//         let query = {};
//         if (req.query?.category) {
//           query = {category: req.query.category}
//         }
//       const result = await bookcollection.find(query).toArray();
//       res.send(result);
//     });

//     // to get single book data
//     app.get('/book/:id', async (req, res) => {
//       const id = req.params.id;
//       const result = await bookcollection.findOne({_id: new ObjectId(id)});
//       res.send(result);
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


app.use(userRouter)



mongoose.connect("mongodb+srv://admin:12345@cluster0.vhmmmo4.mongodb.net/mernbook").then((result)=>{
  console.log("db is connected");
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  })
})

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${process.env.PORT}`);
// })