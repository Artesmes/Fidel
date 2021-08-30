const mongoose = require("mongoose");
const { isEmail } = require("validator");

const clientSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      minlength: 2,
      maxLength: 20,
      trim: true,
    },
    prenom: {
      type: String,
      required: true,
      minlength: 2,
      maxLength: 20,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 30,
      minLenght: 6,
    },
    codePostal: {
      type: Number,
      required: true,
      minLenght: 1,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model('client', clientSchema)

module.exports = ClientModel;