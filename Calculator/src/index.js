import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "+", "*", "%", "="]

class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }
  render(){
    return(
    <div className="calculator">
      <div className="screen">{this.state.value}</div>
      <Buttons handleClick={this.handleClick} /> 
    </div>
    )
  }
}

// class Screen extends React.Component {
//   render(){
//     return()
//   }
// }

class Buttons extends React.Component {
  render(){
    let buttons = VALUES.map((value, i)=>{
        return (<li>
          <Button key={value} handleClick={this.props.handleClick} value={value} />
        </li>
      )
    })
    console.log(buttons)
    return(
      <ul>
        {buttons}
      </ul>
    )
  }
}

class Button extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      values: []
    }
  }
  
  handleClick(e){
    console.log(this.state.values)
    this.setState({
      values: this.state.values.push(e.target.innerHTML)
    })
  }
    render(){
      return(
        <div className="button" onClick={this.handleClick}>{this.props.value}</div>
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
