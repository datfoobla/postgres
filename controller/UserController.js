// const User = require('../models/sequelize')
const {User} = require('../models')
class UserController {

    create(req, res, next ){
        let { firstName, lastName , email } = req.body
        console.log( email)
        User.create({
            firstName,
            lastName,
            email,
        })
        .then( User => res.json(User))
        .catch( e=> console.log(e))
    }

    show(req, res, next){
        User.findAll({email : res.query})
        .then( User => res.json(User))
        .catch( e => console.log(e))
    }


}

module.exports = new UserController