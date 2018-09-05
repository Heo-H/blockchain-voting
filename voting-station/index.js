const APP_NAME = 'voting-station';
const SERVER_PORT = 3000;
const STATIC_DOC_PATH = '/public';

const express = require('express');
const app = express();

app.use(express.static(__dirname + STATIC_DOC_PATH));

app.listen(SERVER_PORT, function () {
    console.log(APP_NAME + " listening on port " + SERVER_PORT + ".");
});