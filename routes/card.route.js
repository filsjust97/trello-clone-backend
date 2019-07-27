const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const card_controller = require('../controllers/card.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', card_controller.getAll);
router.post('/create', card_controller.card_create);

module.exports = router;