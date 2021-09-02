const ClientModel = require('../models/client.model')
const ObjectID = require('mongoose').Types.ObjectId

module.exports.getAllUsers = async (req, res) => {
    const users = await ClientModel.find().select()
    res.status(200).json(users);
}