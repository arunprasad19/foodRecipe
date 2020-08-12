const mongoose = require('mongoose');
require('../models/foodModel');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,
    function(error){
        if(error){
            console.log(error);
        }
        console.log("connection successful");
    }),





module.exports = {
    models: {
        Food: mongoose.model('Food'),
    }
}