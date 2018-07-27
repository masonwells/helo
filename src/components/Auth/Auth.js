import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import withRouter from 'react-router'

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      error: '',
      redirect: false
    }
  }

  handleChange(value) {
    this.setState({
      username: value
    });
  }

  handlePassword(value) {
    this.setState({
      password: value
    });
  }

  register(){
    const {username, password} = this.state
    axios.post('/api/register', {username, password}).then((res)=>{
      const { id, username, profile_pic } = res.data
      this.setState({
        username,
        password,
        redirect: true
      })
    })
  }

  login(){
    const {username, password} = this.state
    axios.post('/api/login', {username, password}).then((res)=>{
      const { id, username, profile_pic } = res.data
      this.setState({
        username,
        password,
        redirect: true
      })
    })
  }




  render(){
    if (this.state.redirect) {
      return <Link to="/dashboard" />;
    }
    
    return(
      <div>
        <h1>Auth</h1>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <input onChange={(e) => this.handlePassword(e.target.value)}/>
        <button onClick={()=>this.login()}>Login</button>
        <button onClick={()=>this.register()}>Register</button>
      </div>
    )
  }
}

export default Auth