import React from 'react';
import Image from './image.js';
import Description from './description.js';


class Main extends React.Component {
  render(){
    return (
      <div>
        <Image />
        <Description state={this.props.state} />
      </div>
    );
  }
}

export default Main;
