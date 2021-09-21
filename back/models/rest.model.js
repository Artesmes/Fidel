const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require('bcryptjs')

const restSchema = new mongoose.Schema(
  {
    nomRest: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true,
    },
    adresse: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [isEmail],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 30,
      minlength: 6,
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
restSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next()
})

restSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email })
  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return user
    }
    throw Error('incorrect password')
  }
  throw Error('incorrect email')
}

const RestModel = mongoose.model('restaurant', restSchema)

module.exports = RestModel;