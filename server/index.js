const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive')
const session = require('express-session')
require("dotenv").config()

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const port = SERVER_PORT

const app = express()
app.use(bodyParser.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

massive(CONNECTION_STRING).then(db => app.set("db",db))

//EndPoints
app.post("/api/login", controller.login)
app.post("/api/register", controller.register);
app.post("/api/addpost", controller.addPost);
app.get("/api/posts", controller.getPosts)


app.listen(port, console.log(`Listening to port: ${port}`))





















// app.post('/api/register', (req,res)=>{
//   const db = req.app.get('db') //set up connection with db
//   const {username, password} = req.body //deconstruct from front end or body
//   const {profile_pic} = 'google.com' //not sure what to do here.. but it needs a profile pic
// db.create_user([username, password, profile_pic]).then(res=>{
//   const {id, username, profile_pic} = res[0]
//   req.session.userid = username;
//   res.status(200).send(id, username, profile_pic)
// })
// })

// app.post('/api/login', (req,res)=>{
//   const db = req.app.get('db')
//   const {username, password} = req.body
//   db.get_user([username]).then(res=>{
//     if (res.username === username & res.password === password){
//       res.status(200).send({id, username, profile_pic})
//     }else{
//       send.status(400, 'gtfo')
//     }
//   })

// })
