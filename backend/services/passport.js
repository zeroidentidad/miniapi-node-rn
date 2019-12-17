const passport = require('passport')
const ExtractJwt = require('passport-jwt').ExtractJwt
const JwtStrategy = require('passport-jwt').Strategy

const User = require('../models/user')
const config = require('../config')

var jwtOptions = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromHeader('authorization')
}

var jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user) {
        if(err) {
            return done(err, false)
        }
        if(user) {
            done(null, user)
        }else{
            done(null, false)
        }
    })
})

passport.use(jwtStrategy)
