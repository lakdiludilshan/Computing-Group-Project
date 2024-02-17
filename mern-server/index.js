const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

// Middleware
app.use(cors());
app.use(express.json());

//1234

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb configuration


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:1234@cluster0.puy8gfz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const bookcollection = client.db("BookInventory").collection("Books");

    // insert a book to the db : post method
    app.post('/addbook', async (req, res) => {
      const newBook = req.body;
      const result = await bookcollection.insertOne(newBook);
      res.send(result);
    });

    // get all books from the db : get method
    // app.get('/books', async (req, res) => {
    //   const cursor = bookcollection.find({});
    //   const books = await cursor.toArray();
    //   res.send(books);
    // });

    // update a book in the db : patch or update method
    app.patch('/update/:id', async (req, res) => {
        const id = req.params.id;
        // console.log(id);
        const updatedBookData = req.body;
        const filter = { _id: new ObjectId(id)};
         const updateDoc = {
          $set: {
            ...updatedBookData
          },
        }
        const options = { upsert: true };

        // update
        const result = await bookcollection.updateOne(filter, updateDoc, options);
        res.send(result);
    }); 

    // delete a book from the db : delete method
    app.delete('/delete/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await bookcollection.deleteOne(filter);
      res.send(result);
    });

    // find by category
    app.get('/books', async (req, res) => {
        let query = {};
        if (req.query?.category) {
          query = {category: req.query.category}
        }
      const result = await bookcollection.find(query).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})