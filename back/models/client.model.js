const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require('bcryptjs')

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

// play function before save into DB
clientSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next()
})

clientSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email })
  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return user
    }
    throw error('incorrect password')
  }
  throw Error('incorrect email')
}

const ClientModel = mongoose.model('client', clientSchema)

module.exports = ClientModel;