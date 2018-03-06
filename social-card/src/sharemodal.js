import React from 'react';

class ShareModal extends React.Component {
  share(){
    const share = {
      position: "absolute",
      backgroundColor: "white",
      top: "230px",
      padding:" 20px",
      left: "185px",
      borderRadius: "2px"
    };
    return share;
  }

  render(){
    return(
      <div style={this.share()} onClick={this.props.addShare}>
        <p>Link to article:<br></br>https://www.cruisingworld.com/learn-to-sail-101</p>
      </div>
    );
  }
}

export default ShareModal;
