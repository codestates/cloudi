const imageController = require('../controllers/image/index');

const express = require('express');
const router = express.Router();

//  get /image
router.get('/', imageController.get);

module.exports = router;