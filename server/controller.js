module.exports ={
  
  login: (req, res) =>{
    const db = req.app.get("db")
    const {username, password} = req.body
    db.get_user([username, password])
    .then(user => res.status(200).send(user))
    .catch(()=>res.status(500).send())
  },

  register: (req, res) =>{
    const db = req.app.get("db")
    const {username, password} = req.body
    db.create_user([username, password, `profilePicture=${username}`])
    .then(user => res.status(200).send(user))
    .catch(()=>res.status(500).send())
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



