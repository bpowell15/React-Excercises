import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './index.css';

const VALUES = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const OPERATORS = ["+", "-", "x", "/", "="]

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: "",
      storedValue: "",
      operator: "",
      power: "off"
    };
    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePower = this.handlePower.bind(this);
  }
  
  handleNumClick(e){
    if (this.state.power === "off") {
      return;
    }
    
    const symbols = ["x", "/", "+", "-", "=",]
    
    if (this.state.value === "0"  && !isNaN(parseInt(e.target.innerHTML))) {
      this.setState({value: e.target.innerHTML})
    } else if (!isNaN(parseInt(e.target.innerHTML))) {
      this.setState({value: this.state.value + e.target.innerHTML})
    } 
  }
  
  handleClear(){
    if (this.state.power === 'off'){
      return;
    }
    this.setState({
      value: "0",
      storedValue: "",
      operator: ""
    })
  }
  
  handlePower(){
    let power;
    let value;
    if (this.state.power === 'off'){
      power = 'on'
      value = "0"
    } else {
      power = 'off'
      value = ""
    }
    this.setState({
      value,
      power
    })
  }
  
  
  render(){
    let power = ''
    if (this.state.power === 'off') {
      power = 'off'
    } 
    return(
      <div>
        <Draggable>
        <div className="calculator">
          <div className={`screen ${power}`}>{this.state.value}</div>
          <Buttons handlePower={this.handlePower} power={this.state.power} handleClear={this.handleClear} handleNumClick={this.handleNumClick} /> 
        </div>
        </Draggable>
        <div className="title">Calculator: A Basic React Review - Brice Powell <i>Try Clicking and Dragging!</i></div>
      </div>
    )
  }
}


class Buttons extends React.Component {

  render(){
    let buttons = VALUES.map((value, i)=>{
        return (<li>
          <Button key={value} handleClick={this.props.handleNumClick} value={value} />
        </li>
      )
    })
    let operators = OPERATORS.map((value, i)=>{
        return (<li>
          <Button key={value} handleClick={this.props.handleOpClick} value={value} />
        </li>
      )
    })
    return(
      <ul>
        {buttons}
        {operators}
        <div className="button clear" onClick={this.props.handleClear}>C</div> 
        <div className="button power" onClick={this.props.handlePower}>{this.props.power}</div> 
      </ul>
    )
  }
}

class Button extends React.Component {

    render(){
      return(
        <div className="button" onClick={this.props.handleClick}>{this.props.value}</div>
      )
    }
  }
  

const add = (a, b)=>{
  return a + b 
}

const subtract = (a, b)=>{
  return a - b 
}

const multiply = (a, b)=>{
  return a * b 
}

const divide = (a, b)=>{
  return a / b
}

// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// screen 
// buttons 
