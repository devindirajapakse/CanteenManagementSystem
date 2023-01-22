const express = require('express');
const routes = express.Router();

const user = require('./routes/user');
const food = require('./routes/food');
const order = require('./routes/order');
const feedbacks = require('./routes/feedbacks');


routes.use('/user', user);
routes.use('/food', food);
routes.use('/order', order);
routes.use('/feedbacks',feedbacks);

module.exports = routes;