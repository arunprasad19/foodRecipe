'use strict';

var express = require('express');

var router = express.Router({ mergeParams: true });

var foodController = require('../controllers/foodController');

router.post('/', foodController.create_new_food);

router.get('/:food_id', foodController.get_food_by_id);

router.delete('/:food_id', foodController.delete_food);

module.exports = router;