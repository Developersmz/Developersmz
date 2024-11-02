require('dotenv').config()

const express = require('express')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const MySQLStore = require('express-mysql-session')(session)
const passport = require('passport')
const handlebars = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const indexRoutes = require('./routes/index')
const adminRoutes = require('./routes/admin')

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

const sessionStore = new MySQLStore({
    host: process.env.DB_HOST,
    //port: 3306, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Config Middleware
app.use(express.urlencoded({extended: true}))
app.use(session({
    key: 'sessiondevelopersmzkey',
    secret: process.env.SESSION_SECRET || 'hsdhgshgdshgd1212126121yg21g21g271g72g182g18g281281g281g',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 1000 * 60 * 60
     }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Config Handlebars
const hbs = handlebars.create({ defaultLayout: 'main' }, {allowProtoMethodsByDefault: true})
app.engine('handlebars', hbs.engine)
app.engine('handlebars', hdbs.engine)
app.set('view engine', 'handlebars')

// Configura o diretório onde estão as views
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Importar as rotas
app.use('/auth', authRoutes)
app.use('/', indexRoutes)
app.use('/admin', adminRoutes)

const PORT = 3000
app.listen(PORT, () => console.log(`SERVER ARE RUNNING ON ${PORT} PORT`))