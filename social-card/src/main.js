import React from 'react';
import Image from './image.js';
import Description from './description.js';
import Author from './author.js';


class Main extends React.Component {

  main(){
    const main = {
      marginLeft: '50px',
      maxWidth: 'fit-content',
      position: 'relative'
    };
    return main;
  }

  render(){
    return (
      <a href="https://www.cruisingworld.com/learn-to-sail-101" style={{textDecoration: 'none'}}>
        <div style={this.main()}>
          <Image />
          <Description state={this.props.state} />
          <Author author={this.props.state.author} image={this.props.state.authorImg}  />
        </div>
        <div style={{marginTop:"-8px", padding: "10px", fontSize:"12px", marginLeft: "50px", maxWidth:"478px", borderBottom:"1px solid rgb(223, 223, 223)", borderLeft:"1px solid rgb(223, 223, 223)", borderRight:"1px solid rgb(223, 223, 223)", borderRadius: '2px' }}>
          <span style={{fontSize: "14px", textDecoration: "none", color: "black"}}><b>{this.props.state.headline}</b></span><br></br>
          <span style={{color: "black"}}>{this.props.state.description}</span>
        </div>
      </a>
    );
  }
}

export default Main;
