'use strict';

require('../models/foodModel');

var storage = require('../lib/storage').mongoDB;
var blogic = require('../lib/blogic');

module.exports = {

  get_food_by_id: function (req, res) {
    get_food_by_id(req, res);
  },
  create_new_food: function (req, res) {
    create_new_food(req, res);
  },
  getFoods: function (req, res) {
    getFoods(req, res);
  },
  delete_food: function (req, res) {
    delete_food(req, res);
  },


}

function processErrorMessage(err, res) {
  if (err.statusCode) {
    return res.status(err.statusCode).json(err);
  } else {
    let resObj = {
      status: 'Error',
      statusCode: 500,
      message: 'Internal Server Error',
      description: err
    };
    return res.status(500).json(resObj);
  }
}



/**
 *   Get the food info from object id
 */

var get_food_by_id = async function (req, res) {
  try {
    let query = {
      _id: req.params.food_id
    };
    var resObj =  blogic.foods.getFood(query);
    console.log("returned "+ await resObj)
    resObj.status = 'success';
    return res.json(JSON.parse(await resObj));
  } catch (err) {
    return processErrorMessage(err, res);
  }
}

var getFoods = async function (req, res) {
  try {
    var resObj = await blogic.foods.getFoods();
    resObj.status = 'success';
    return res.status(200).json(resObj);
  } catch (err) {
    return processErrorMessage(err, res);
  }
}

var delete_food = async function (req, res) {
  try {
    let query = {
      _id: req.params.food_id
    };
    var resObj = await storage.foods.deleteFood(query);
    resObj.status = 'success';
    return res.status(200).json(resObj);
  } catch (err) {
    return processErrorMessage(err, res);
  }
}

/**
 *   create a new food
 */

var create_new_food = async function (req, res) {
  try {
    {
      var resObj = await blogic.foods.createFood(req.body);
    }
    resObj.status = 'success';
    return res.status(201).json(resObj);
  } catch (err) {
    return processErrorMessage(err, res);
  }
}