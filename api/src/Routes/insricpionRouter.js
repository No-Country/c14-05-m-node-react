// inscripcionRoutes.js
const express = require('express');
const router = express.Router();
const { createInscripcionHandler } = require('../Handlers/inscripcionHandlers');

// POST /inscripcion - ruta para crear una nueva inscripción
router.post('/Inscripcion', createInscripcionHandler);

module.exports = router;
