const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

// mongodb+srv://nehad:imbest007@nodeprojects.gdiys.mongodb.net/?retryWrites=true&w=majority