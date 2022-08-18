const shortURL = require('../models/shorturl')
const shortid = require('shortid')
const get_index = (req, res) => {
  shortURL
    .find()
    .then(result => {
      res.render('index', { shorturl: result, title: 'Home Page' })
    })
    .catch(err => console.log(`there is an error11`))
}

const shorturl_post = (req, res) => {
  const { fullurl } = req.body
  if (!fullurl.startsWith('https')) {
    res.render('404')
    return
  }
  const id = shortid.generate()
  const short_url = '/url/' + id
  const new_fullurl = new shortURL({
    fullurl,
    shorturl: short_url,
  })
  new_fullurl
    .save()
    .then(result => {
      res.redirect('/')
    })
    .catch(err => console.log('there is an error22'))
}
const shorturl_get = async (req, res) => {
  try {
    const redirect_url = await shortURL.findById(req.params.id)
    if (!redirect_url.fullurl.startsWith('https')) {
      res.render('404')
      return
    }
    res.redirect(redirect_url.fullurl)
  } catch (error) {
    console.log(error)
  }
}
module.exports = { get_index, shorturl_post, shorturl_get }
