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
    let db_projects = await Project.findAll()
    let db_testimony = await Testimony.findAll()

    let home = db_home.map(items => items.toJSON())
    let about = db_about.map(items => items.toJSON())
    let values = db_values.map(items => items.toJSON())
    let skills = db_skills.map(items => items.toJSON())
    let services = db_services.map(items => items.toJSON())
    let projects = db_projects.map(items => items.toJSON())
    let testimony = db_testimony.map(items => items.toJSON())

    const userId = req.session.passport ? req.session.passport.user : null;
    let user = null

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
        user
    })
})

router.post('/developersmz/send_email', (req, res) => {
    const { name, email, phone, message } = req.body

    // Configurando o Nodemailer para enviar o email
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'developersmz12@gmail.com',
            pass: 'zvygbxjdbgrexpfs'
        }
    })
    const mailOptions = {
        from: email,
        to: 'developersmz12@gmail.com',
        subject: `Novo Contato: ${name}`,
        text: `Você recebeu uma nova mensagem de:
        
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Mensagem: ${message}`
    }
    // Enviando o email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('<h1>Ocorreu um erro ao enviar o e-mail.</h1>');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('<h1>E-mail enviado com sucesso!</h1>');
        }
    })
})

router.get('/developersmz/terms_conditions', (req, res) => {
    res.render('conditions')
})

module.exports = router