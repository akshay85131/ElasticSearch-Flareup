const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

const User = module.exports = mongoose.model('User', UserSchema)