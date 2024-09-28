const dotenv = require('dotenv')
const Sequelize = require('sequelize')

dotenv.config()

// Mysql Database connection
const sequelize = new Sequelize("developersmz", "root", "0115183aBC$", {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}