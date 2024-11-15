const bcrypt = require('bcryptjs')
const { User, Home, About, Value, Skill, Service, Project, Testimony } = require('../models/Models')

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
                return Value.create(data)
            }
        }).then(() => res.render('output', {success: 'Tabela atualizada com sucesso!'})).catch(() => res.render('output', {error: 'Ocorreu um erro ao atualizar a tabela!'}))
    }  else if (req.body.hidden == 'project'){
        // Project
        const { projectTitle, projectSkills, projectType, projectlink } = req.body
        const data = {
            title: projectTitle,
            skillused: projectSkills,
            type: projectType,
            link: projectlink
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
        Testimony.create(data).then(() => res.redirect('/')).catch(() => res.redirect('/'))
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
                    { username, email, password: hashedpass }, 
                    { where: { id: admin.id } } 
                )
                res.render('output', { success: "Admin atualizado com sucesso!" })
            } else {
                res.render('output', { error: "As palavras-passe não coincidem!" })
            }
        } else {
            res.render('output', { error: "Admin inexistente!" })
        }
    } catch (e) {
        console.log("Ocorreu um erro: ", e)
    }
}

module.exports = { updateAction, updateAdmin }