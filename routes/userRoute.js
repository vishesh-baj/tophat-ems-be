const express = require('express');
const loginControllers = require('../controllers/loginControllers');
const otpControllers = require('../controllers/otpControllers');
const adminControllers = require('../controllers/adminControllers');
const resetPassword = require('../controllers/resetPassword');
const router = express.Router()

// Routes which can be accessed without jwt 

router.post('/register',adminControllers)
router.post('/login',loginControllers)
router.post('/sendOtp',otpControllers)
router.post('/resetPassword',resetPassword)

module.exports = router;