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
      noteTitle: '',
      noteContent: '',
      history: [],
    };
  }

  onChangeNote = (event) => {
    let alertBoolnew = false;
    // const history = this.state.history.slice();
    // const current = this.state.history.slice(history.length - 1);
    let valueNotenew = event.target.value;
    const totalChar = valueNotenew.length;
    let leftChar = 10 - totalChar;
    if (totalChar > 10) {
      leftChar = 0;
      valueNotenew = valueNotenew.slice(0, 10);
      alertBoolnew = true;
    }
    this.setState({
      noteContent: valueNotenew,
      alertBool: alertBoolnew,
      leftChar,
    });
  }

  onChangeNoteTitle = (event) => {
    const newvalueNoteTitle = event.target.value;
    // const history = this.state.history.slice();
    this.setState({
      noteTitle: newvalueNoteTitle,
    });
  }

  onSaveEvent = () => {
    const { noteTitle } = this.state;
    const { noteContent } = this.state;
    const history = this.state.history.slice();
    this.setState({
      history: history.concat([
        {
          valueNote: noteContent,
          valueNoteTitle: noteTitle,
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
          onChangeNote={event => this.onChangeNote(event)}
          onChangeNoteTitle={event => this.onChangeNoteTitle(event)}
          valueNoteTitle={this.state.noteTitle}
          alertBool={this.state.alertBool}
          textCounter={this.state.leftChar}
          valueNote={this.state.noteContent}
          onSaveEvent={() => this.onSaveEvent()}
        />
        <Header textHeader="About Us" />
      </div>
    );
  }
}

export default App;
