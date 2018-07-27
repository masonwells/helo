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




