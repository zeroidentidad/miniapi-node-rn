var router = require('express').Router()
const passport = require('passport')
var requireAuth = passport.authenticate('jwt', {session: false})
var requireLogin = passport.authenticate('local', {session: false})

const AuthController = require('../controllers/auth_controller')
const TodosController = require('../controllers/todos_controller')
const passportService = require('./passport')

// rutas de autenticacion

router.route('/signup').post(AuthController.signup)

router.route('/signin').post(requireLogin, AuthController.signin)

// rutas de data todos user

router.route('/users/:user_id/todos')
.post(requireAuth, TodosController.create)
.get(requireAuth, TodosController.index);

router.route('/users/:user_id/todos/:todo_id')
.delete(requireAuth, TodosController.destroy);

// ruta protegida (test)
function restricted(req, res, next) {
    res.send("Area protegida")
}
router.route('/restricted').get(requireAuth, restricted)

module.exports = router