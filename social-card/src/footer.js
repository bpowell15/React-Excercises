import React from 'react';
import ShareModal from './sharemodal.js';
import CommentModal from './commentmodal.js';

class Footer extends React.Component {
  constructor(props){
   super(props);
   this.state = {
    likes: {total:100, clicked: false},
    shares: 25,
    comments: 2,
    shareModal: false,
    commentModal: false
   };

   this.addShare = this.addShare.bind(this);
   this.addLike = this.addLike.bind(this);
   this.addComment = this.addComment.bind(this);
  }

  addShare(){
    if (!this.state.shareModal) {
      this.setState({
        shareModal: true
      });
      return;
    }

    this.setState({
      shares: this.state.shares + 1,
      shareModal: false
    });
  }

  addLike(){
    if (this.state.likes.clicked){
      this.setState ({
        likes: {total: this.state.likes.total - 1, clicked: false}
      });
    } else {
      this.setState({
        likes: {total: this.state.likes.total + 1, clicked: true}
      });
    }
  }

  addComment(){
    if (!this.state.commentModal) {
      this.setState({
        commentModal: true
      });
      return;
    }

    this.setState({
      comments: this.state.comments + 1,
      commentModal: false
    });
  }

  render(){
    let commentModal;
    let sharedModal;

    if (this.state.commentModal && !this.state.shareModal) {
      commentModal = <CommentModal addComment={this.addComment}/>;
    }

    if (this.state.sharedModal && !this.state.commentModal) {
      sharedModal = <ShareModal addShare={this.addShare} />;
    }

    return (
      <div>
        {sharedModal}
        {commentModal}
        <ul style={{listStyle: "none", display: "flex", width: "660px", justifyContent: "space-around"}}>
          <li onClick={this.addLike}>
            Likes: {this.state.likes.total}
          </li>
          <li onClick={this.addShare}>
            Shares: {this.state.shares}
          </li>
          <li onClick={this.addComment}>
            Comments: {this.state.comments}
          </li>
          <li>
            <a src="/#"></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
