import React from 'react';

class Footer extends React.Component {
  constructor(props){
   super(props);
  }
  render(){
    return (
      <div>
        <ul>
          <li>
            <img></img>
            {this.props.state.likes}
          </li>
          <li>
            {this.props.state.shares}
          </li>
          <li>
            {Object.keys(this.props.state.comments).length}
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
