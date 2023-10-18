const express = require('express');
const router = express.Router();
const eventoController = require('../Controllers/eventsController');

router.post('/evento', eventoController.crearEvento);
router.get('/evento', eventoController.obtenerEvento);
router.delete('/evento/:id', eventoController.eliminarEvento);

module.exports = router;
