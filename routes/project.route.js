const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const project_controller = require('../controllers/project.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', project_controller.getAll);
router.post('/create', project_controller.project_create);

module.exports = router;