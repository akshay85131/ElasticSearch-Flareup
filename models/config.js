
const mongoose = require('mongoose')
mongoose.set('debug', true)
const connection = mongoose.connect('mongodb://localhost/trip', { useNewUrlParser: true }, (err) => {
// const connection = mongoose.connect('mongodb+srv://akshay4362:akshay4362@cluster0-tra13.mongodb.net/trip?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
  //  const connection =mongoose.connect ('mongodb://admin:Akshay004362@localhost:27017/trip', { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('connection successfull')
  } else {
    console.log(err)
  }
})

module.exports = { connection, trips }