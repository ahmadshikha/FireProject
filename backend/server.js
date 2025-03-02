const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const productFilterRouter=require('./Routes/productRouter/FilterProductRouter')
const productRouter = require('./Routes/productRouter/ProductRouter');
const connectDB = require('./DB/connection');

const app = express();
const port = process.env.PORT || 4444;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/filter",productFilterRouter);
app.use("/product", productRouter);

// Database connection and server start
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});