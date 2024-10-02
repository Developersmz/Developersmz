const { User, Home, About, Value, Skill, Service, Project, Testimony } = require('../models/Models')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')


// Configuração do Passport
passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ where: { username } })
            if (!user) {
                return done(null, false, {message: "Usuário não encontrado."})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return done(null, false, {message: "Senha incorreta."})
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

passport.deserializeUser(async (id, done) => {``
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
    res.redirect('/login')
}

// Check if admin
function checkAdmin(req, res, access) {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return access()
    } 
    res.status(403).send("<h1>Acesso negado:</h1><h2> você não tem credenciais de administrador.</h2><hr><a href='/developersmz' style='line-height: 70px; padding: 15px; color: #000; margin-top: 30px; font-size: 17px; border: 1px solid #ccc; text-decoration: none;'>Voltar ao developersmz</a>")
}

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
            return res.redirect("/developersmz")
        })
    })
    .catch((error) => {
        res.redirect('/register')
    })
}

const login = passport.authenticate("local", {
    successRedirect: "/developersmz",
    failureRedirect: "/login",
    failureFlash: false
})

const updateAction  = (req, res) => {
    if (req.body.hidden == 'home'){
        // home
        const { homePhrase } = req.body
        const data = {
            phrase: homePhrase
        }
        Home.findOne().then(existingRow => {
            // update
            if (existingRow) {
                return existingRow.update(data)
            } else {
                // create
                return Home.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'aboutInt'){
        // About introduction
        const {aboutIntro} = req.body
        const data = {
            introduction: aboutIntro
        }
        About.findOne().then(existingRow => {
            if (existingRow) {
                // update
                return existingRow.update(data)
            } else {
                // create
                return About.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'aboutText'){
        // About text
        const { aboutText } = req.body
        data = {
            text: aboutText
        }
        About.findOne().then(existingRow => {
            if (existingRow) {
                // update
                return existingRow.update(data)
            } else {
                // create
                return About.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'objInt'){
        // Objective introduction
        const { objIntro } = req.body
        const data = {
            objectiveIntro: objIntro
        }
        Value.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'objText'){
        // Objective text
        const { objText } = req.body
        const data = {
            objectiveText: objText
        }
        Value.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'goalInt'){
        // goal introduction
        const { goalIntro } = req.body
        const data = {
            goalIntro: goalIntro
        }
        Value.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'goalText'){
        // goal text
        const { goalText } = req.body
        const data = {
            goalText: goalText
        }
        Value.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'compInt'){
        // Compromise introduction
        const { comproIntro } = req.body
        const data = {
            compromiseIntro: comproIntro
        }
        Value.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'compText'){
        // Compromise text
        const { comproText } = req.body
        const data = {
            compromiseText: comproText
        }
        Value.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'addSkill'){
        // Add skill
        const { skillTitle, skillText } = req.body
        console.log(skillTitle, skillText)
        const data = {
            title: skillTitle,
            text: skillText
        }
        Skill.create(data).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'service'){
        // Service text
        const { serviceText } = req.body
        const data = {
            introduction: serviceText
        }
        Service.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'addService'){
        // Service
        const { serviceIcon, serviceTitle, serviceText } = req.body
        const data = {
            icon: serviceIcon,
            title: serviceTitle,
            text: serviceText
        }
        Service.create(data).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'projText'){
        // Project text
        const { projectsText } = req.body
        const data = {
            introduction: projectsText
        }
        Project.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Project.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    }  else if (req.body.hidden == 'project'){
        // Project
        const { projectTitle, projectSkills, projectType, projectLink } = req.body
        const data = {
            title: projectTitle,
            skillused: projectSkills,
            type: projectType,
            link: projectLink
        }
        Project.create(data).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'testText'){
        // Testimony text
        const { testText } = req.body
        console.log(testText)
        const data = {
            introduction: testText
        }
        Testimony.findOne().then(existingRow => {
            if (existingRow) {
                return existingRow.update(data)
            } else {
                return Testimony.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    } else if (req.body.hidden == 'newTest'){
        // Testimony
        const { username, testimony, classifNumber } = req.body
        const data = {
            name: username,
            message: testimony,
            rating: classifNumber,
        }
        Testimony.create(data).then(() => res.redirect('/developersmz')).catch(() => res.redirect('/developersmz'))
    }
}

const updateAdmin = async (req, res) => {
    let { username, email, pass, confpass } = req.body

    try {
        // Busca o usuário que é administrador
        let admin = await User.findOne({ where: { isAdmin: true } })

        if (admin) {
            // Verifica se as senhas coincidem
            if (pass === confpass) {
                // Hastear a palavra passe
                const hashedpass = await bcrypt.hash(pass, 10)
                // Atualiza o usuário
                await User.update(
                    { username, email, password: hashedpass }, // Dados a serem atualizados
                    { where: { id: admin.id } } // Condição para encontrar o admin específico
                )
                console.log("Admin atualizado com sucesso")
            } else {
                console.log("As palavras-passe não coincidem")
            }
        } else {
            console.log("Admin inexistente!")
        }
    } catch (e) {
        console.log("Ocorreu um erro: ", e)
    }
}

const logout = (req, res) => {
    req.logout(() => {
        res.redirect("/login")
    })
}
module.exports = { register, login, updateAction, updateAdmin, logout, checkLogin, checkAdmin }
