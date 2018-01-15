const express = require('express');
const router = express.Router();

const controller = require('../controllers/about');

//const controller = require('../controllers/mail.js');

/* GET home page. */
router.get('/', controller.page);

//router.post('/contact', controller.sendEmail);

module.exports = router;
