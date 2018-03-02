import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.component {
  render(){
    return(
    <div>Calculator</div>
  )
  }
}



// ========================================

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
