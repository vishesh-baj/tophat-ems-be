const express = require('express');
const loginControllers = require('../controllers/loginControllers');
const registerControllers = require('../controllers/registerControllers');
const router = express.Router()

// Routes which can be accessed without jwt 

router.post('/register',registerControllers)
router.post('/login',loginControllers)

module.exports = router;