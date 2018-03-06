import React from 'react';

class ShareModal extends React.Component {

  render(){
    return(
      <div onClick={this.props.addShare}>
        <p>Link to article: https://www.cruisingworld.com/learn-to-sail-101</p>
      </div>
    );
  }
}

export default ShareModal;
