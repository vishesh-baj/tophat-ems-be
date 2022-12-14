const express = require('express');
const candidateControllers = require('../controllers/candidateControllers');
const secureApi = require('../middlewares/secureAPI');
const router = express.Router()

router.post("/candidate",secureApi,candidateControllers)

module.exports = router;