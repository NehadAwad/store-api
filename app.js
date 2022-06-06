// const a = require('dotenv').config()
// console.log(a)

const express = require('express')
const app = express()
require('dotenv').config()

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.send('<h1>Store Api</h1><a href="api/v1/products">products route</a>')
})

//products route

app.use('/api/v1/products', productsRouter);


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000;


const start = async () => {
    try {
      // connectDB
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
  