const express = require('express');
const router = express.Router();
const eventoController = require('../Controllers/eventsController'); 

router.post('/evento', eventoController.crearEvento);


module.exports = router;
