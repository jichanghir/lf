var express = require('express');
var router = express.Router();

const controller = require('../controllers/works');

router.get('/', controller.page);

module.exports = router;
