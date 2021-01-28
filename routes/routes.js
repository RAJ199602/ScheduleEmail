const express = require('express');
const router = express.Router();
const  mail  = require('./sendmail');

router.use('/mail', mail);

module.exports = router ;
