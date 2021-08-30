const router = require('express').Router()
const authClientController = require('../controllers/authClientController')

router.post("/register", authClientController.signUp )

module.exports = router