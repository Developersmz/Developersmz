const { User } = require('../models/Models')
const { passport } = require('../../config/passport')

const register = (req, res, next) => {
    const { username, email, password } = req.body

    User.create({
        username: username,
        email: email,
        password: password,
        isAdmin: false,
     })
    .then((user) => {
        req.login(user, (e) => {
            if (e) {
                return next(e)
            }
            return res.redirect("/")
        })
    })
    .catch((error) => {
        res.redirect('/auth/register')
    })
}

const login = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.render('user', { errorMessage: info.message })
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err)
            }
            return res.redirect('/')
        });
    })(req, res, next)
}

const logout = (req, res) => {
    req.logout(() => {
        res.redirect("/auth/login")
    })
}
module.exports = { register, login, logout }