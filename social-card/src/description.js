import React from 'react';

class Description extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (<div>{this.props.state.description}</div>);
  }
}

export default Description;
