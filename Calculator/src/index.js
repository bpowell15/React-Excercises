import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './index.css';

const VALUES = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const OPERATORS = ["+", "-", "x", "/", "="];

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      storedValue: "",
      operator: "",
      power: "off",
      notes: 1,
      left: 10
    };
    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleOpClick = this.handleOpClick.bind(this);
    this.addNoteOnClick = this.addNoteOnClick.bind(this);
    this.removeNoteOnClick = this.removeNoteOnClick.bind(this);
  }

  removeNoteOnClick(e){
    e.target.parentElement.parentElement.remove();
  }

  addNoteOnClick(){
    this.setState({
      notes: this.state.notes + 1
    });
  }

  handleNumClick(e){
    if (this.state.power === "off") {
      return;
    }

    if (this.state.value === "0" && !OPERATORS.includes(e.target.innerHTML)) {
      this.setState({value: e.target.innerText});
    } else if (this.state.operator === "") {
      this.setState({value: this.state.value + e.target.innerText});
    } else if (this.state.operator !== "") {
      this.setState({
        value: e.target.innerText,
        storedValue: this.state.value
      });
    }
  }

  handleOpClick(e){
    let value;
    if (e.target.innerHTML !== '=' && this.state.operator === "" ) {

      this.setState({
        operator: e.target.innerHTML
      });
      value=this.state.value
    } else {
      if (e.target.innerHTML === '+') {
        value = add(parseInt(this.state.value), parseInt(this.state.storedValue))
      } else if (e.target.innerHTML === '-') {
        value = subtract(parseInt(this.state.storedValue), parseInt(this.state.value))
      } else if (e.target.innerHTML === 'x') {
        value = multiply(parseInt(this.state.value), parseInt(this.state.storedValue))
      } else {
        console.log(this.state.storedValue)
        value = divide(parseInt(this.state.storedValue), parseInt(this.state.value))
      }
    }

    this.setState({
      value: value,
      storedValue: ""
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
    let left = this.state.left + 10
    let power = ''
    let notes = [];
    if (this.state.power === 'off') {
      power = 'off'
    }

    const note =( <Draggable cancel=".not-draggable" >
      <div>
        <Note addNoteOnClick={this.addNoteOnClick} removeNoteOnClick={this.removeNoteOnClick} />
      </div>
    </Draggable>);

    for (let i = 0; i < this.state.notes; i++) {
      notes.push(note);
    }


    return(
      <div className="main">
        {notes}
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
    <div className="note-component">
      <div className="controls">
        <div className="new not-draggable" onClick={this.props.addNoteOnClick}>+</div>
        <div className="new not-draggable" onClick={this.props.removeNoteOnClick}>x</div>
      </div>
      <textarea className="note not-draggable" onChange={(e)=>{
          this.setState({note: e.currentTarget.value})
          }}
        value={this.state.note}>
      </textarea>
    </div>
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
