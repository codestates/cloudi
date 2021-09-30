const standController = require('../controllers/stand');

const express = require('express');
const router = express.Router();

// get /stand
router.get('/', standController.get);

// post /stand
router.post('/', standController.post);

module.exports = router;