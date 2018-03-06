import React from 'react';

class Description extends React.Component {
  constructor(props){
    super(props);
  }

  description(){
    const description = {
      position: "absolute",
      top: "100px",
      left: "50px",
      right: "50px",
      fontSize: "36px",
      textAlign: "justify",
      color: "white",
      textShadow: "1px 1px 1px black"
    };
    return description;
  }

  render(){
    return (<div style={this.description()}>{this.props.state.description}</div>);
  }
}

export default Description;
