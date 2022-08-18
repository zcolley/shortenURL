const mongoose = require('mongoose')

const Schema = mongoose.Schema

const shortURLSchema = new Schema(
  {
    fullurl: {
      type: String,
      required: true,
    },
    shorturl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const ShortURL = mongoose.model('ShortURLs', shortURLSchema)

module.exports = ShortURL
