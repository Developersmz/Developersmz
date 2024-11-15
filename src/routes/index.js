const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
const { User, Home, About, Value, Skill, Service, Project, Testimony} = require('../models/Models')

router.get('/', async (req, res) => {
    let db_home = await Home.findAll()
    let db_about = await About.findAll()
    let db_values = await Value.findAll()
    let db_skills = await Skill.findAll()
    let db_services = await Service.findAll()
    let db_projects = await Project.findAll({ order: [['id', 'DESC']] })
    let db_testimony = await Testimony.findAll({ order: [['id', 'DESC']] })

    let home = db_home.map(items => items.toJSON())
    let about = db_about.map(items => items.toJSON())
    let values = db_values.map(items => items.toJSON())
    let skills = db_skills.map(items => items.toJSON())
    let services = db_services.map(items => items.toJSON())
    let projects = db_projects.map(items => items.toJSON())
    let testimony = db_testimony.map(items => items.toJSON())

    const userId = req.session.passport ? req.session.passport.user : null;
    let user = null

    let currentYear = new Date().getFullYear()

    if (userId) {
        const foundUser = await User.findByPk(userId)
        user = foundUser ? foundUser.toJSON() : null
    }
    
    res.render('index', {
        db_home: home,
        db_about: about,
        db_values: values,
        db_skills: skills,
        db_services: services,
        db_projects: projects,
        db_testimony: testimony,
        user,
        currentYear
    })
})

router.post('/developersmz/send_email', async (req, res) => {
   try {
    const { name, email, phone, message } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
        res.render('index', { error: "Use o mesmo email da sua conta!" })
    }

    // Configurando o Nodemailer para enviar o email
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Novo Contato: ${name}`,
        text: `Você recebeu uma nova mensagem de:
        
        Nome: ${name} \n
        Email: ${email} \n
        Telefone: ${phone} \n
        Mensagem: ${message} \n`
    }
    // Enviando o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.render('index', { error: "Ocorreu um erro durante o envio!" })
        } else {
            return res.render('index', { success: "E-mail enviado com sucesso!" })
        }
    })
   } catch (error) {
    console.log("Erro no envio: " + error)
   }
})

router.get('/developersmz/terms_conditions', (req, res) => {
    res.render('conditions')
})

module.exports = router