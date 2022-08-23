const express = require('express')

const mongoose = require('mongoose')
const path = require('path')
const app = express()
require('dotenv').config()
const shorturl_routes = require('./routes/shorturl')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set(express.static(path.join(__dirname, 'public')))

const connect_db = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(3000, () => console.log(`listening on port 3000`))
  } catch (error) {
    console.log('There is an error')
  }
}
app.use('/', shorturl_routes)

connect_db()
