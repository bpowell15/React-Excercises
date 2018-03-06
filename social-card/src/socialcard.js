import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';

const STATE = {
  poster: {title: 'The Daily Sailor', image: './gucci.jpg'},
  headline: 'All hands on deck',
  author: 'Popeye',
  description: 'Wanna learn to sail? Learn from the best, dont forget to bring your spinach!',
  link: "bricepowell.com",
  authorImg: 'face.jpg',
  likes: 100,
  shares: 52,
  comments: {1: 'Cool story bro', 2: 'really great article'},
  createdAt: 'September 12',
};

class SocialCard extends React.Component {

  card(){
    const card = {
      borderTop: "1px solid rgb(223, 223, 223)",
      borderBottom: "1px solid rgb(223, 223, 223)",
      maxWidth: "550px"
    };
    return card;
  }


  render(){
    return(
      <div style={this.card()}>
        <Header state={STATE} />
        <Main  state={STATE} />
        <Footer state={STATE} />
      </div>
    );
  }
}

export default SocialCard;
