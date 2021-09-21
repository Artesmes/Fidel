const router = require('express').Router()
const authRestController = require('../controllers/authRestController')

// authentifications restaurateur
router.post("/register", authRestController.signUp )
router.post('/login', authRestController.signIn)


module.exports = router