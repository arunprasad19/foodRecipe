const mongoose = require('mongoose');

var mongodb = require('../../config/mongodb');


//models
var Food = mongodb.models.Food;

var foods ={
    getFood: async function (query) {
        try {
            let foodQuery = Food.findOne(query);
            return await foodQuery.exec();
        } catch (err) {
          throw (err);
        }
      },

      deleteFood: async function (query) {
        try {
          return await Food.remove(query).exec();
        } catch (err) {
          throw (err);
        }
      },

      getFoods: async function () {
        try{
          let foodQuery = Food.find();
          return await foodQuery.exec();
        } catch (err) {
          throw err;
        }
      },
    
      createFood: async function (body) {
        try {
          var food = new Food(body);
          return await food.save();

        } catch (err) {
          throw (err);
        }
      },
    
}
module.exports = {
    foods : foods 
  }