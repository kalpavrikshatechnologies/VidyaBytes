require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection= require('./db/db')
const router = require('./routes/users')
const bookRouter= require('./routes/books')


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use(router)
app.use('/api/books',bookRouter);

const port = 9000;
app.listen(port, console.log(`Listening on port ${port}...`));