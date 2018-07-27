import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

function Nav(props){
  console.log(props)
  return(
    <div>
      <h1>Nav</h1>
      <Link to='/dashboard'>
        <button>Home</button>
      </Link>

      <Link to='/new'>
        <button>New Post</button>
      </Link>

      <Link to='/'>
        <button>Logout</button>
      </Link>

      <div>
        <p>{props.username}</p>
        <p>{props.profile_image}</p>
      </div>

    </div>
  )
}

function mapStateToProps(state){
  return {
    profile_image: state.profile_image,
    username: state.username
  }
}

export default connect(mapStateToProps)(Nav)