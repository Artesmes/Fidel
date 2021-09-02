const router = require('express').Router()
const authClientController = require('../controllers/authClientController')

// authentifications
router.post("/register", authClientController.signUp )
router.post('/login', authClientController.signIn)
router.get('/logout', authClientController.logout)

// user DB

module.exports = router