const incenseController = require('../controllers/incense');

const express = require('express');
const router = express.Router();

// get /incense
router.get('/', incenseController.get);

// post /incense
router.post('/', incenseController.post);

module.exports = router;