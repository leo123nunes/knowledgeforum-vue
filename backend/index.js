const app = require('express')()
const consign = require('consign')
const db = require('./config/db.js')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api/category.js')
    .then('./api/article.js')
    .then('./api/user.js')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('The backend is running...')
})