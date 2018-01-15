const express = require('express');
const router = express.Router();

const controller = require('../controllers/blog');

/* GET home page. */
router.get('/', controller.page);

module.exports = router;
