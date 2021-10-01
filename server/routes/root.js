const express = require('express');
const router = express.Router();

// get /
router.get('/', (req, res) => {
  res.send('WELCOME! CLOUDI SERVER!');
});

module.exports = router;