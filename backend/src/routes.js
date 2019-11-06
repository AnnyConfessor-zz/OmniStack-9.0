const express = require('express');
const SessionControler = require('./controllers/SessionControler');
const SpotControler = require('./controllers/SpotController');

const routes = express.Router(); //específico para criar rotas

routes.post('/sessions', SessionControler.store);

routes.post('/spots', SpotControler.store);

module.exports = routes; 

