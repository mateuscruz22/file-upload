const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.get('/', (req, res) => {
    return res.json({ text: 'Index' })
})

routes.post('/posts', multer(multerConfig).single('file'), (req, res) => {
    return res.json({ text: 'File Upload' })
})

module.exports = routes 