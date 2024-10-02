const db = require('../../config/config')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')


// User
const User = db.sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resetPasswordExpires: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

const Home = db.sequelize.define('Home', {
    phrase: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    }
})

const About = db.sequelize.define('About', {
    introduction: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

const Value = db.sequelize.define('Value', {
    objectiveIntro: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    objectiveText: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    goalIntro: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    goalText: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    compromiseIntro: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    compromiseText: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

const Skill = db.sequelize.define('Skill', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

const Service = db.sequelize.define('Service', {
    introduction: {
        type: DataTypes.STRING,
        allowNull: true
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

const Project = db.sequelize.define('Project', {
    introduction: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    skillused: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

const Testimony = db.sequelize.define('Testimony', {
    introduction: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

User.beforeCreate(async (user) => {
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash
})

db.sequelize.sync({ alter: true })
  .then(() => {
      console.log('Tabelas sincronizadas com sucesso!');
  })
  .catch((err) => {
      console.error('Erro ao sincronizar tabelas:', err);
  });

module.exports = { User, Home, About, Value, Skill, Service, Project, Testimony }
