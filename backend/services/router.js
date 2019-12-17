var router = require('express').Router()
const AuthController = require('../controllers/auth_controller')

function restricted(req, res, next) {
    res.send("Area protegida")
}

router.route('/restricted').get(restricted)

router.route('/signup').post(AuthController.signup)

module.exports = router