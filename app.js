require('dotenv').config();
const https = require('https');
const http = require('http');
const bodyParser = require('body-parser');
const express  = require('express');
const app = express();
var fs = require("fs"); 
var cors = require('cors');

//Import Routes
var index = require('./routes/index');

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: false}));

//Cors
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    var allowedOrigins = [
        "http://localhost:4200",
        "http://127.0.0.1:4200"
    ];

    var origin = req.headers.origin;
    if(origin) {
        for(let i = 0; i < allowedOrigins.length; i++) {
            if (origin.match(allowedOrigins[i]) > -1) {
                res.setHeader("Access-Control-Allow-Origin", origin);
                break;
            }
        }
    }

    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,Accept,X-Requested-With,Content-Type,X-Auth-Token"
    );

    // Set to true if you need the website to
    // include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        // Pass to next layer of middleware
        next();
    }
});

//Use routes
// app.use('/api/v1', index);
app.use('/api/v1', index);

app.all('*', function(req, res){
    res.status(400)
    res.send('Invalid route');
});

let server;
server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(process.env.PORT);
server.on('listening', () => {
    console.log("Food Recipe server started on port: ", process.env.PORT)
});