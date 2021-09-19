const ClientModel = require('../models/client.model')
const jwt = require('jsonwebtoken')

const {signUpErrors, signInErrors} = require('../utils/errors')

const maxAge = 3*24*60*60*1000
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}

module.exports.signUp = async (req, res) => {
    const {nom, prenom, email, password, codePostal } = req.body

    try {
        const user = await ClientModel.create({nom, prenom, email, password, codePostal})
        res.status(201).json({ user: user._id} )
    }
    catch(err) {
        const errors = signUpErrors(err)
        res.status(200).send({ errors })
        //console.log(errors)
    }
}

module.exports.signIn = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await ClientModel.login(email, password);
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge})
        
        res.status(201).json({user: user._id, token: token})
        console.log(res)
    } catch (err){
        const errors = signInErrors(err)
        res.status(200).json({errors})
        //console.log(errors)
    }
}

module.exports.logout = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect('/')
    console.log('ici')
}