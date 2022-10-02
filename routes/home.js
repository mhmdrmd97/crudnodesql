const express = require('express');
const router = express.Router();
const {getHomePage}= require('../Controllers/home/HomeController')


router.get('/',getHomePage)
 

module.exports = router;