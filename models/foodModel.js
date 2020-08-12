'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var FoodSchema = new Schema({
  
  name: { //  name of the Food
    
    type: String,
    trim: true,
    required: true
  },
   
  foodRecipe:[{
    type: String,  
    required: false
}],
  });
  
  module.exports = mongoose.model('Food', FoodSchema);