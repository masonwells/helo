import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getLoginData} from "./../../ducks/reducer";


class Auth extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      error: '',
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

  register() {
    const { username, password } = this.state
    if (username && password) {
      axios.post('/api/register', { username: username, password: password }).then(res => {
        if (res.data.length !== 0) {
          const { id, username, password, profile_pic } = res.data[0];
          this.props.getLoginData(id, username, password, profile_pic);
          this.props.history.push("/dashboard")
        }
      })
    } else {
      this.setState({ error: 'pooooop!!!!!! Think you missed something!' })
    }
  }

  login() {
    const { username, password } = this.state
    if (username && password) {
      axios.post('/api/login', { username: username, password: password }).then(res => {
        console.log(res.data)
        if (res.data.length !== 0) {
          const { id, username, password, profile_pic } = res.data[0];
          this.props.getLoginData(id, username, password, profile_pic);
          this.props.history.push("/dashboard")
        }
      })
    } else {
      this.setState({ error: 'EEEEEEEEEKKKK PROBS A TYPO!!' })
    }
  }




  render() {

    return (
      <div>
        <h1>Auth</h1>
        <input onChange={(e) => this.handleChange(e.target.value)} />
        <input onChange={(e) => this.handlePassword(e.target.value)} />
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.register()}>Register</button>
        <p>{this.state.error}</p>
      </div>
    )
  }
}

export default connect(null, {getLoginData})(Auth)