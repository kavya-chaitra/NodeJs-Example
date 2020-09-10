require('./dbModels/db');
const bodyparser = require('body-parser');
var express = require('express');
var app = express()
var apiController = require('./controller/TestController');
const { json } = require('express');

app.use(bodyparser.json())
app.listen(3000, () => console.log("Listening on 3000"))
app.use("/", apiController)