import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './index.css';
import Note from './note.js';
import Buttons from './buttons.js';
import Weather from './weather.js';
import * as Util from './util.js';


const VALUES = [ 0, 7, 8, 9, 4, 5, 6, 1, 2, 3, "."];
const OPERATORS = ["=", "+", "-", "x", "/"];

class Desk extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      storedValue: "",
      operator: "",
      power: "off",
      notes: 1
    };
    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.handleOpClick = this.handleOpClick.bind(this);
    this.addNoteOnClick = this.addNoteOnClick.bind(this);
    this.removeNoteOnClick = this.removeNoteOnClick.bind(this);
  }

  removeNoteOnClick(e){
    debugger
    e.target.parentElement.parentElement.remove();
    this.setState({
      notes: this.state.notes - 1
    });
  }

  addNoteOnClick(){
    debugger
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
    if (this.state.power === "off") {
      return;
    }

    let value;
    if (e.target.innerHTML !== '=' && this.state.operator === "") {

      this.setState({
        operator: e.target.innerHTML
      });

      value=this.state.value;
    } else {

      if (e.target.innerHTML === '+' || this.state.operator === '+') {
        value = Util.add(parseFloat(this.state.value),
                    parseFloat(this.state.storedValue));
      } else if (e.target.innerHTML === '-' || this.state.operator === '-') {
        value = Util.subtract(parseFloat(this.state.storedValue),
                         parseFloat(this.state.value));
      } else if (e.target.innerHTML === 'x' || this.state.operator === 'x') {
        value = Util.multiply(parseFloat(this.state.value),
                         parseFloat(this.state.storedValue));
      } else {
        console.log(this.state.storedValue);
        value = Util.divide(parseFloat(this.state.storedValue),
                       parseFloat(this.state.value));
      }
    }

    this.setState({
      value: value,
      storedValue: ""
    });
  }

  handleClear(){
    if (this.state.power === 'off'){
      return;
    }
    this.setState({
      value: "0",
      storedValue: "",
      operator: ""
    });
  }

  handlePower(){
    let power;
    let value;
    if (this.state.power === 'off'){
      power = 'on';
      value = "0";
    } else {
      power = 'off';
      value = "";
    }
    this.setState({
      value,
      power
    });
  }


  render(){
    let power = '';
    let notes = [];
    let newNote = <div></div>;
    if (this.state.power === 'off') {
      power = 'off';
    }

    const note =( <Draggable cancel=".not-draggable" >
      <div>
        <Note addNoteOnClick={this.addNoteOnClick}
              removeNoteOnClick={this.removeNoteOnClick} />
      </div>
    </Draggable>);

    for (let i = 0; i < this.state.notes; i++) {
      notes.push(note);
    }

    if(this.state.notes === 0) {
      newNote = <div className="new-note" onClick={this.addNoteOnClick}>New Note</div>;
    }



    return(
      <div className="main">
        {newNote}
        {notes}
        <Draggable>
          <div className="calculator">
            <div className={`screen ${power}`}>{this.state.value}</div>
            <Buttons handlePower={this.handlePower}
                     power={this.state.power}
                     handleClear={this.handleClear}
                     handleOpClick={this.handleOpClick}
                     handleNumClick={this.handleNumClick}
            />
          </div>
        </Draggable>
        <Draggable>
          <div className='weather-drag'>
            <Weather />
          </div>
        </Draggable>
        <div className="title">
          Desk: A Basic React Review - Brice Powell
          <i>Try Clicking and Dragging!</i>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Desk />,
  document.getElementById('root')
);

// screen
// buttons
