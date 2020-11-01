const express = require('express');
const boom = require('express-boom');
const cors = require('cors');
const routes = require('./routes');
//const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//app.use(morgan("combined"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(boom());

app.use(cors({ exposedHeaders: ['Content-Length', 'Content-Type', 'X-Total-Count'] }));
app.use(routes);



module.exports = app;