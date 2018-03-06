import React from 'react';

class CommentModal extends React.Component {

  modal(){
    const modal = {
      position: "absolute",
      top: "200px",
      left: "275px",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "2px"
    };
    return modal;
  }

  render(){
    return(
      <div style={this.modal()}>
        <h3>Leave a Comment</h3>
        <textarea></textarea><br></br>
        <button onClick={this.props.addComment} value='Submit'>Submit</button>
      </div>
    );
  }
}

export default CommentModal;
