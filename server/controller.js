module.exports ={
  
  login: (req, res) =>{
    const db = req.app.get('db') //set up connection with db
    const {username, password} = req.body //deconstruct from front end or body
    db.get_user([username])
    .then(user => {
      if (res.username === username & res.password === password){
      res.status(200).send({id, username, profile_pic})
      }else{send.status(400, 'gtfo')}
    })
    .catch(()=>res.status(500).send())
  },

  register: (req, res) =>{
    const db = req.app.get("db")
    const {username, password} = req.body
    db.create_user([username, password, `profilePicture=${username}`])
    .then(res=>{
        const {id, username, profile_pic} = res[0]
        req.session.userid = username;
        res.status(200).send(id, username, profile_pic)})
  },

  getPosts: (req, res) =>{
    const db = req.app.get("db")
    db.get_posts()
    .then(posts => {console.log(posts); res.status(200).send(posts)})
    .catch(()=>res.status(500).send())
  },

  addPost: (req, res) =>{
    const db = req.app.get("db")
    const {title, img, content, authorid} = req.body
    console.log("called")
    db.add_post([title, img, content, authorid])
    .then(posts => res.status(200).send(posts))
    .catch(()=>res.status(500).send())
  }

}



