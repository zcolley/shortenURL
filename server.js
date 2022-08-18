const express = require('express')

const mongoose = require('mongoose')

const app = express()

const shorturl_routes = require('./routes/shorturl')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//mongo db url
const dbURL =
  'mongodb+srv://colley96:q1314520@node-youtube.lkc1a6e.mongodb.net/node-youtube?retryWrites=true&w=majority'

const connect_db = async () => {
  try {
    const result = await mongoose.connect(dbURL, {
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
