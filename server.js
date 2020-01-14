const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const secureRoute = require('./routes/secureRoutes')
const PORT = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute)

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({ error: err })
})

app.listen(PORT, () => {
    console.log(`Magic Happening on ${PORT}`)
  })