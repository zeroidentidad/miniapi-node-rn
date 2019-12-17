var router = require('express').Router()
const passport = require('passport')
var requireAuth = passport.authenticate('jwt', {session: false})

const AuthController = require('../controllers/auth_controller')
const passportService = require('./passport')

function restricted(req, res, next) {
    res.send("Area protegida")
}

router.route('/restricted').get(requireAuth, restricted)

router.route('/signup').post(AuthController.signup)

module.exports = router