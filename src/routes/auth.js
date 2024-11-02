require('dotenv').config()

const nodemailer = require('nodemailer')
const express = require('express')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const { Op } = require('sequelize')
const router = express.Router()
const { User } = require('../models/Models')

// Controllers
const { register, login, logout } = require('../controllers/authController')

// Register User

router.get('/register', (req, res) => {
    res.render('user')
})

router.post('/register', register)

router.get('/login', (req, res) => {
    res.render('user')
})

router.post('/login', login)

router.get('/forgot', (req, res) => {
    res.render('forgot')
})

router.post('/forgot', async (req, res) => {
    const { email } = req.body

    try {
        const user = await User.findOne({ where: { email } });
    
        if (!user) {
          return res.status(404).send('E-mail não encontrado');
        }

        // Gera o token de redefinição de senha
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpires = Date.now() + 3600000;

        // Salva o token e a expiração no banco de dados
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetTokenExpires;
        await user.save();

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
        
        // Envia o e-mail com o link de redefinição de senha
        const resetUrl = `http://localhost:3000/reset/${resetToken}`
        const mailOptions = {
        to: user.email,
        from: process.env.EMAIL_USER,
        subject: 'Redefinição de senha',
        text: `Você está recebendo este e-mail porque solicitou a redefinição de senha para sua conta.\n\n
                Por favor, clique no link a seguir para redefinir sua senha:\n\n
                ${resetUrl}\n\n
                Se você não solicitou isso, ignore este e-mail e sua senha permanecerá inalterada.\n`,
        }

        await transporter.sendMail(mailOptions);

    res.send('<strong>Um e-mail de redefinição de senha foi enviado para o endereço fornecido.</strong>');

    } catch (error) {
        res.status(500).send('<h2>Ocorreu um erro ao enviar o e-mail de redefinição de senha.</h2>')
        console.log(error)
    }
})

router.get('/reset/:token', async (req, res) => {
    console.log(req.params.token)
    try {
        const user = await User.findOne({
          where: {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { [Op.gt]: Date.now() },
          },
        })
    
        if (!user) {
          return res.status(400).send('<h1>Token de redefinição inválido ou expirado.</h1>');
        }
    
        res.render('reset', { token: req.params.token });
      } catch (error) {
        res.status(500).send('<h1>Ocorreu um erro ao processar o token.</h1>');
        console.log(error)
      }
})

router.post('/reset/:token', async (req, res) => {
    const { newpass, confpass } = req.body

    try {
        const user = await User.findOne({
          where: {
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { [Op.gt]: Date.now() },
          },
        });
    
        if (!user) {
          return res.status(400).send('<h1>Token de redefinição inválido ou expirado.</h1>');
        }
        if (newpass != confpass) {
            return res.status(400).send('As senhas nao coencidem.');
        }
        // Atualiza a senha e limpa o token
        user.password = await bcrypt.hash(newpass, 10);
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        await user.save();
    
        res.send('<h1>Senha alterada com sucesso!</h1><br><hr><br><a style={text-decoration: none; padding: 15px; border: 1px solid #000} href="/login">Voltar ao login</a>');
      } catch (error) {
        res.status(500).send('<h1>Erro ao redefinir a senha.</h1><br><hr><br><a style={text-decoration: none; padding: 15px; border: 1px solid #000} href="/login">Voltar ao login</a>');
    }
})

router.get('/logout', logout)


module.exports = router




