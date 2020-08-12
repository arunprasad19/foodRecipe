var storage = require('./storage').mongoDB;
var Food = require('../config/mongodb').models.Food;

var foods = {

    createFood: async function (body) {
        try {
          var resObj = await storage.foods.createFood(body);
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
      let jobs = await storage.foods.getFood(query);
      return {
        success: true,
        result: food
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
      let jobs = await storage.foods.deleteFood(query);
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