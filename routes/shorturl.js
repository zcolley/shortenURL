const express = require('express')
const router = express.Router()
const {
  get_index,
  shorturl_post,
  shorturl_get,
} = require('../controllers/shorturl-controller')
router.get('/', get_index).post('/', shorturl_post)
router.get('/url/:id', shorturl_get)
module.exports = router
