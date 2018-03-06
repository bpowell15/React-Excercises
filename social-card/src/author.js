import React from 'react';

class Author extends React.Component {
  render(){
    return(
      <div>
        <h3>{this.props.author}</h3>
        <img src="https://loremflickr.com/50/50" />
      </div>
    );
  }
}

export default Author;
