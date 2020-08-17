var storage = require('./storage').mongoDB;
var Food = require('../config/mongodb').models.Food;
var fs = require('fs');
var { ifError } = require('assert');

var foods = {
  
  createFood: async function (body) {
    try { 
      var resObj = await storage.foods.createFood(body);
      
      var path = "./lib/assets/"+resObj._id+".json";

      console.log(path)

      fs.writeFileSync(path ,JSON.stringify(resObj))
        
      return resObj;

    } catch (err) {
      throw err;
    }
  },
  
  getFood: async function (query) {
    try {
      if (!query) {
        query = {};
      }
      // let  = await storage.foods.getFood(query);
      var path = "./lib/assets/"+query._id+".json";
      console.log(path)
      var users = fs.readFileSync(path)
      // console.log("data"+data)
        // JSON.parse(data);
       console.log(users)
       return users
      } catch (err) {
      throw (err);
    }
  },
  
  getFoods: async function () {
    try {

      let foods = await storage.foods.getFoods();
      return {
        success: true,
        result: foods
      };
    } catch (err) {
      throw (err);
    }
  },
  
  deleteFood: async function (query) {
    try {
      if (!query) {
        query = {};
      }
      let foods = await storage.foods.deleteFood(query);
      return {
        success: true,
        result: food
      };
    } catch (err) {
      throw (err);
    }
  },
}
module.exports = {
  foods : foods
}