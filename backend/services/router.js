var router = require('express').Router()

function restricted(req, res, next) {
    res.send("Area protegida")
}

router.route('/restricted').get(restricted)

module.exports = router