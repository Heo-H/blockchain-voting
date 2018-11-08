const config = require(__dirname + '/config.json');
const APP_NAME = config.appName;
const SERVER_PORT = config.port;

const express = require('express');
const app = express();

app.use('/api', require(__dirname + '/api/index.js'));

app.listen(SERVER_PORT, function () {
    console.log(APP_NAME + " listening on port " + SERVER_PORT + ".");
});