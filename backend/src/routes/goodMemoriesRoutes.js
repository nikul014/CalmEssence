const express = require('express');
const router = express.Router();
const { getMemoryList, createMemory, updateMemory } = require('../controllers/goodMemoriesController');

router.get('/list', getMemoryList);
router.post('/create', createMemory);
router.put('/update', updateMemory);

module.exports = router;
