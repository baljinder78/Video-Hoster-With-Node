const mongoose = require('mongoose');

const postsch = mongoose.Schema({
  title: String,
  desc: String,
});

module.exports = mongoose.model('posts',postsch);
