const ClientModel = require('../models/client.model')

module.exports.signUp = async (req, res) => {
    const {nom, prenom, email, password, codePostal } = req.body

    try {
        const user = await ClientModel.create({nom, prenom, email, password, codePostal})
        res.status(201).json({ user: user._id} )
    }
    catch(err) {
        res.status(200).send({ err })
    }
}