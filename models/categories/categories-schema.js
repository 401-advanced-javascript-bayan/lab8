'use strict' ;

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type : String , require : true},
  kids : {type : Number , require : true},
  favourites : {type : Array , require : true },
});

module.exports = mongoose.model('categories', categories);
