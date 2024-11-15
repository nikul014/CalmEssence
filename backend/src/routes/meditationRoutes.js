const express = require('express');
const router = express.Router();
const { getMeditationList, createMeditation, updateMeditation } = require('../controllers/meditationController');

router.get('/list', getMeditationList);
router.post('/create', createMeditation);
router.put('/update', updateMeditation);

module.exports = router;
