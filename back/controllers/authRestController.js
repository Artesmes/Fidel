const RestModel = require('../models/rest.model')
const jwt = require('jsonwebtoken')

// errors
const {signUpErrors, signInErrors} = require('../utils/errorsRest')


const maxAge = 3*24*60*60*1000
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}

// Authentification du restaurant 

module.exports.signUp = async (req, res) => {
    const {nomRest, adresse, email, password, codePostal } = req.body

    try {
        const user = await RestModel.create({nomRest, adresse, email, password, codePostal})
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
        const user = await RestModel.login(email, password);
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge})
        
        res.status(201).json({user: user._id, token: token})
        console.log(res)
    } catch (err){
        const errors = signInErrors(err)
        res.status(200).json({errors})
        console.log(errors)
    }
}