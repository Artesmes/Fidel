const jwt = require('jsonwebtoken')
const ClientModel = require('../models/client.model')

module.exports.checkUsers = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log("here 1")
                res.locals.user = null;
                res.cookie('jwt', '', { maxAge: 1});
                next()
            } else {
                console.log("here 2")
                let user = await ClientModel.findById(decodedToken.id);
                res.locals.user = user
                console.log(user)
                next()
            }
        })
    }
}

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken)  => {
            if (err) {
                console.log(err)
            } else {
                console.log(decodedToken.id)
                next()
            }
        })
    }
}