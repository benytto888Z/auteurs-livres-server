const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:String,
    genre:String,
    authorId:String
})

module.exports = mongoose.model('Book',bookSchema);

/*
  module.exports = mongoose.model('Book',bookSchema);
 
  we create a collection name 'Book' in mongodb. And this collection is going to have
  objects inside of it which look like this 'bookSchema' :
  const bookSchema = new Schema({
    name:String,
    genre:String,
    authorId:String
})

*/