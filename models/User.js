const mongoose = require('mongoose');



const usersch = mongoose.Schema({
  userId:String,
  username:String,
  email:String,
  password:String
});

module.exports = mongoose.model('users', usersch);
