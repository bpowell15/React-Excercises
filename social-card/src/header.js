import React from 'react';

class Header extends React.Component {

  image(){
    const image = {
      borderRadius: "50%"
    };
    return image;
  }

  description(){
    const description = {
    };
    return description;
  }


  render(){
    console.log(this.props);
    return(
      <div style={{width: "560px", display: "flex"}}>
      <img style={this.image()} src="https://loremflickr.com/50/50"></img>
      <div style={this.description()}>
        <h1 style={{fontSize: "14px", margin: "2px"}}>{this.props.state.poster.title}<span>@{this.props.state.poster.title}</span></h1>
        <p style={{fontSize: "12px", margin: "2px"}}>{this.props.state.headline}</p>
        <p style={{fontSize: "12px", margin: "2px"}}>{this.props.state.author}</p>
        <p style={{fontSize: "12px", margin: "2px"}}>{this.props.state.createdAt}</p>
      </div>
      </div>
    );
  }
}

export default Header;
