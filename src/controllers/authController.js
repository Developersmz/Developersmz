const { Op } = require('sequelize')
const { User } = require('../models/Models')
const { passport } = require('../../config/passport')

const register = async (req, res, next) => {
    const { username, email, password } = req.body

    try {
        const checkUser = await User.findOne({
            where: {
                [Op.or]: [{ email }, {username}]
            }
        })

        if (checkUser) {
            if (checkUser.email === email){
                return res.render('user', { errorMessage: "E-mail já registrado. Use outro ou faça login." })
            }
            if (checkUser.username === username) {
                return res.render('user', { errorMessage: "Nome de usuário em uso. Tente outro." });
            }
        }

        const newUser = await User.create({
            username: username,
            email: email,
            password: password
        })

        req.logIn(newUser, (err) => {
            if (err) {
                return next(e)
            }
            return res.redirect('/')
        })

    } catch (error) {
        console.error(error);
        res.render('user',  { errorMessage: "Erro ao criar conta. Tente novamente." })
    }
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