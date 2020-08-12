'use strict';

var express = require('express');
var router = express.Router();

var foodRoutes = require('./foodRoutes');


router.use('/food', foodRoutes);


router.all('*', function (req, res) {
    res.status(400)
    res.send('Invalid route');
});

module.exports = router;