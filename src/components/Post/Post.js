import React, {Component} from "react";


export default class Post extends Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <div>
          <h2>{this.props.title}</h2>
          <div>
            <p> by {this.props.author}</p>
            <img src={this.props.profile_pic} />
          </div>  
        </div> 
        <div>
          <img src={this.props.img} />
          <p>{this.props.content}</p>
        </div>
      </div>  
    )
  }
}