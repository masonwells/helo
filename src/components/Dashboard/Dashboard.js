import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Post from './../Post/Post'
import Nav from './../Nav/Nav'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      searchInput: '',
      isChecked: true
    }
  }


  componentDidMount() {
    axios.get("/api/posts").then(res => {
      console.log(res.data)
      this.setState({ posts: res.data })
    })
  }

  handleInput(value) {
    this.setState({
      searchInput: value
    })
  }

  //this is the wonderful code for the checkbox
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  }


  render() {
    let posts_mapped = this.state.posts.map((post, i) =>{
      const {title, img, content, username, profile_pic, userId} = post
      return <Post key={i} title={title} img={img} content={content} author={username} profile_pic={profile_pic} userId = {userId} />
    })

    const { isChecked } = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        <input onChange={e => this.handleInput(e.target.value)} />
        <button>Search</button>
        <button>Reset</button>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        /> My posts

        <div>
          
          {posts_mapped}
        </div>
      </div>
    )
  }
}

function mapStateToProp(state){
  return{
    username: state.username,
    userId: state.userId
  }
}

export default connect(mapStateToProp)(Dashboard)