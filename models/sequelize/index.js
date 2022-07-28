
const sequelize = require('sequelize')
const db = require('../../connect')
const {DataTypes} = require('sequelize')
const User =  db.define('User', {

        firstName: {
            type: DataTypes.STRING,
            allowNull :false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull :false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull :false
        }
    })

// User.sync().then(() => {
//     console.log('table created');
//     })

module.exports = User