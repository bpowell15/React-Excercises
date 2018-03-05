import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <div>
      <img src={this.props.state.poster.image}></img>
      <p>{this.props.state.poster.title}<span>@{this.props.state.poster.title}</span></p>
      <p>{this.props.state.headline}</p>
      <p>{this.props.state.author}</p>
      <p>{this.props.state.createdAt}</p>
      </div>
    );
  }
}

export default Header;
