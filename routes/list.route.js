const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const list_controller = require('../controllers/list.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', list_controller.getAll);
router.get('/fetch_lists_from_project/:project', list_controller.fetch_lists_from_project);
router.post('/create', list_controller.list_create);
router.post('/create_Card_And_Update_List', list_controller.add_Card_Update_List);
module.exports = router;