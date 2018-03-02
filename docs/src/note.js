import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Note extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      note: "Add a note",
    };
  }


  render(){
    return(
    <div className="note-component">
      <div className="controls">
        <div className="new not-draggable"
             onClick={this.props.addNoteOnClick}>+</div>
        <div className="new not-draggable"
             onClick={this.props.removeNoteOnClick}>x</div>
      </div>
      <textarea className="note not-draggable"
                onChange={(e)=>{
                            this.setState({note: e.currentTarget.value});
                          }}
                value={this.state.note}>
      </textarea>
    </div>
  );
  }
}

export default Note;
