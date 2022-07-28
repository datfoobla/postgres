const { Sequelize } = require('sequelize')

module.exports = new Sequelize('postgres', 'postgres', '1522', {
    host: 'localhost',
    dialect: 'postgres',
    
  })



