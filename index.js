const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const app= express()
const db = require('./connect')
const route  = require('./routes/index')


app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

async function connect(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connect()


route(app)


// sequelize.authenticate()
//   .then( () => console.log('database connected...'))
//   .catch( (err) => console.log( err))

// app.get('/', (req,res) =>
//     res.send('hello')
// )

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server started on port ${PORT}`))