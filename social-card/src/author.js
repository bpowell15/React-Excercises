import React from 'react';

class Author extends React.Component {

  author(){
    const author = {
      position: "absolute",
      right: "15px",
      top: "260px",
      display: "flex",
      minWidth:"125px",
      justifyContent: "space-between",
      backgroundColor: "rgb(209, 137, 41)",
      padding: "5px",
      borderRadius: "2px"
    };
    return author;
  }

  render(){
    return(
      <div style={this.author()}>
        <h3>{this.props.author}</h3>
        <img style={{borderRadius: "5px"}} src="https://loremflickr.com/50/50" />
      </div>
    );
  }
}

export default Author;
