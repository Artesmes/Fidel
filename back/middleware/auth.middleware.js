const jwt = require('jsonwebtoken')
const ClientModel = require('../models/client.model')

module.exports.checkUsers = (req, res, next) => {
    const token = req.cookies;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                res.cookie('jwt', '', { maxAge: 1});
                next()
            } else {
                let user = await ClientModel.findById(decodedToken.id);
                res.locals.user = user
                console.log(user)
                next()
            }
        })
    }
}