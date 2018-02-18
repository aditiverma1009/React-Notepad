import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertBool: false,
      leftChar: 10,
      history: [{
        valueNoteTitle: '',
        valueNote: '',
      }],
      pageno: 0,
    };
  }

  onChangeNote = (event) => {
    let alertBoolnew = false;
    // const history = this.state.history.slice();
    // const current = this.state.history.slice(history.length - 1);
    let valueNotenew = event.target.value;
    const valueNoteTitlenew = this.state.history.valueNoteTitle;
    const totalChar = valueNotenew.length;
    let leftChar = 10 - totalChar;
    if (totalChar > 10) {
      leftChar = 0;
      valueNotenew = valueNotenew.slice(0, 10);
      alertBoolnew = true;
    }


    this.setState({
      history: [{
        valueNote: valueNotenew,
        valueNoteTitle: valueNoteTitlenew,
      }],
      alertBool: alertBoolnew,
      leftChar,
    });
  }

  onChangeNoteTitle = (event) => {
    const newvalueNoteTitle = event.target.value;
    const newvalueNote = this.state.history.valueNote;
    // const history = this.state.history.slice();

    this.setState({
      history: [{
        valueNote: newvalueNote,
        valueNoteTitle: newvalueNoteTitle,
      }],
    });
  }

  onSaveEvent = () => {
    const { valueNoteTitle } = this.state.history;
    const { valueNote } = this.state.history;
    const history = this.state.history.slice();
    this.setState({
      history: history.concat([
        {
          valueNote,
          valueNoteTitle,
        }]),
    });
  }

  render() {
    return (
      <div className="App">
        <Header textHeader="Start taking Note" />
        <Body
          textNoteTitleHeading="Note Title"
          textButtonEn="en"
          textNoteHeading="Please type your note below"
          textSave="Save"
          onChangeNote={this.onChangeNote}
          onChangeNoteTitle={this.onChangeNoteTitle}
          valueNoteTitle={this.state.history.valueNoteTitle}
          alertBool={this.state.alertBool}
          textCounter={this.state.leftChar}
          valueNote={this.state.history.valueNote}
          onSaveEvent={this.onSaveEvent}
        />
        <Header textHeader="About Us" />
      </div>
    );
  }
}

export default App;
