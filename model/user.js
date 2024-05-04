const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testingthedatabase');

const userSchema = mongoose.Schema({
  username: String,
  age: Number,
  email: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
})

const user = mongoose.model('user', userSchema)
module.exports = user;