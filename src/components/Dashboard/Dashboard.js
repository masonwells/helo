import React, {Component} from 'react'

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      searchInput: ''
    }
  }


handleInput(value){
  this.setState({
    searchInput:value
  })
}

  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <input onChange={e=>this.handleInput(e.target.value)}/>
        <button>Search</button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Dashboard