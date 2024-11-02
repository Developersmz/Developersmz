const { User  } = require('../src/models/Models')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

// Configuração do Passport
passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        try {
            const user = await User.findOne({ where: { email } })
            if (!user) {
                return done(null, false, { message: "Usuário não encontrado." })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return done(null, false, { message: "Senha incorreta." })
            }

            return done(null, user)
        } catch (e) {
            return done(e)
        }
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id)
        done(null, user)
    } catch (e) {
        done(e)
    }
})

// Check if logged
function checkLogin(req, res, access) {
    if (req.isAuthenticated()) {
        return access()
    } 
    // When isn't authenticated
    res.redirect('/auth/login')
}

// Check if admin
function checkAdmin(req, res, access) {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return access()
    } 
    res.status(403).send("<h1>Acesso negado:</h1><h2> você não tem credenciais de administrador.</h2><hr><a href='/developersmz' style='line-height: 70px; padding: 15px; color: #000; margin-top: 30px; font-size: 17px; border: 1px solid #ccc; text-decoration: none;'>Voltar ao developersmz</a>")
}

module.exports = { checkLogin, checkAdmin, passport }