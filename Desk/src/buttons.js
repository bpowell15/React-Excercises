import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './index.css';

const VALUES = [ 0, 7, 8, 9, 4, 5, 6, 1, 2, 3, "."];
const OPERATORS = ["=", "+", "-", "x", "/"];

class Buttons extends React.Component {

  render(){
    let buttons = VALUES.map((value, i)=>{
        return (<li>
          <Button key={value}
                  handleClick={this.props.handleNumClick}
                  value={value} />
        </li>
      );
    });
    let operators = OPERATORS.map((value, i)=>{
        return (<li>
          <Button key={value}
                  handleClick={this.props.handleOpClick}
                  value={value} />
        </li>
      );
    });
    return(
      <ul>
        <div className="button clear"
          onClick={this.props.handleClear}>C</div>
        <div className="button power"
          onClick={this.props.handlePower}>{this.props.power}</div>
        {buttons}
        {operators}
      </ul>
    );
  }
}

class Button extends React.Component {

    render(){
      return(
        <div className="button"
             onClick={this.props.handleClick}>{this.props.value}</div>
    );
    }
  }

  export default Buttons;
