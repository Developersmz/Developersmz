const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const handlebars = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')

// Definir os helpers
const hdbs = handlebars.create({
    helpers: {
        isStar: function (rating, index) {
            return index < rating;
        },
        range: function (start, end) {
            const result = [];
            for (let i = start; i <= end; i++) {
                result.push(i);
            }
            return result;
        }
    }
});

// Config Middleware
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'secretsession',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Config Handlebars
const hbs = handlebars.create({ defaultLayout: 'main' }, {allowProtoMethodsByDefault: true})
app.engine('handlebars', hbs.engine)
app.engine('handlebars', hdbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('../public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Importar as rotas
app.use('/', authRoutes)

const PORT = 3000
app.listen(PORT, () => console.log(`SERVER ARE RUNNING ON ${PORT} PORT`))