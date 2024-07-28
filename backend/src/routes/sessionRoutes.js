const express = require('express');
const router = express.Router();
const { createSession, editSession } = require('../controllers/sessionController');

router.post('/create', createSession);
router.post('/edit', editSession);

module.exports = router;
