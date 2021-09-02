const router = require('express').Router()
const authClientController = require('../controllers/authClientController')
const clientController = require('../controllers/clientController')

// authentifications
router.post("/register", authClientController.signUp )
router.post('/login', authClientController.signIn)
router.get('/logout', authClientController.logout)

// user DB
router.get('/', clientController.getAllUsers)

module.exports = router