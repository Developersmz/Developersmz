const express = require('express')
const router = express.Router()
const { checkLogin, checkAdmin } = require('../../config/passport')
const { updateAction, updateAdmin } = require('../controllers/adminController')

const { User } = require('../models/Models')

router.get('/developersmz/dashboard/action', checkLogin, checkAdmin, (req, res) => {
    res.render('actions', { title: "DevelopersMz | Dashboard Actions" })
})

router.post('/dashboard/action', updateAction)

router.get('/action/output', checkLogin, checkAdmin, (req, res) => {
    res.render('output')
})

router.get('/developersmz/dashboard', checkLogin, checkAdmin, async (req, res) => {
    let db_users = await User.findAll()
    let users = db_users.map(items => items.toJSON())
    let numberOfUsers = users.length
    let pickadmin = await User.findOne({ where: { isAdmin: true } })

    const name = pickadmin.username
    const email = pickadmin.email
    const pass = pickadmin.password

    res.render('dashboard', {users, numberOfUsers, name, email, pass})
})

router.post('/editadmin', updateAdmin)

module.exports = router