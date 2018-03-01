import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './index.css';

const VALUES = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
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
    this.handleOpClick = this.handleOpClick.bind(this);
  }
  
  handleNumClick(e){
    if (this.state.power === "off") {
      return;
    }
  
    
    if (this.state.value === "0") {
      this.setState({value: e.target.innerHTML})
    } else if (this.state.operator === "") {
      this.setState({value: this.state.value + e.target.innerHTML})
    } else (
      this.setState({
        value: e.target.innerHTML,
        storedValue: this.state.value
      })
    )
  }
  
  handleOpClick(e){
    let value; 
    if (e.target.innerHTML !== '=' && this.state.operator === "" ) {
      this.setState({
        operator: e.target.innerHTML
      })
    } else {
    
      if (e.target.innerHTML === '+') {
        value = add(this.state.value, this.state.storedValue)
      } else if (e.target.innerHTML === '-') {
        value = subtract(this.state.storedValue, this.state.value)
      } else if (e.target.innerHTML === 'x') {
        value = multiply(this.state.value, this.state.storedValue)
      } else {
        value = divide(this.state.storedValue, this.state.value)
      }
    }
    
    this.setState({
      value, 
      storedValue: "",
      operator: ""
    })
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
        <Note />
        <Draggable>
        <div className="calculator">
          <div className={`screen ${power}`}>{this.state.value}</div>
          <Buttons handlePower={this.handlePower} power={this.state.power} handleClear={this.handleClear} handleOpClick={this.handleOpClick} handleNumClick={this.handleNumClick} /> 
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


class Note extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      note: "Add a note",
    }
  }
  
  
  render(){
    return(
    <textarea className="note" onChange={(e)=>{
          this.setState({note: e.currentTarget.value})
        }} 
      value={this.state.note}>
    </textarea> 
    )
  }
}
  

// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// screen 
// buttons 
