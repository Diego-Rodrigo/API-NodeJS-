const express = require('express');

const usersController = require('./app/controllers/usersController');

const routes = express.Router();



routes.get('/users', usersController.list);

routes.post('/register', usersController.create );

module.exports = routes;


