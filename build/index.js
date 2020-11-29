"use strict";
var express = require('express');
var router = require('./routes');
var cors = require('cors');
var PORT = 5000;
var root = require('./routes/index');
var app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use('/server', root);
require('./socket/socketConfig');
app.listen(PORT, function () { return console.log("Listening on port " + PORT); });
