const routes = require('express').Router()

routes.get('/', (req, res) => {
    return res.json({ text: 'File Upload' })
})

module.exports = routes 