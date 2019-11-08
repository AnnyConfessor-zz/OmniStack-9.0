const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload');

const SessionController = require('./controllers/SessionControler');
const SpotController = require('./controllers/SpotController');

const routes = express.Router(); //específico para criar rotas
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes; 

