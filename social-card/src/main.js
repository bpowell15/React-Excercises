import React from 'react';
import Image from './image.js';
import Description from './description.js';
import Author from './author.js';


class Main extends React.Component {
  render(){
    return (
      <div>
        <Image />
        <Description state={this.props.state} />
        <Author author={this.props.state.author} image={this.props.state.authorImg}  />
      </div>
    );
  }
}

export default Main;
