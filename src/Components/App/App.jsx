import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      alertBool: false,
      valueNote: '',
      leftChar: 10,
    };
  }

  onChangeNote = (event) => {
    let valueNote = event.target.value;
    const totalChar = event.target.value.length;
    let leftChar = 10 - totalChar;
    let alertBool = false;
    if (totalChar > 10) {
      leftChar = 0;
      valueNote = valueNote.slice(0, 10);
      alertBool = true;
    }
    this.setState({
      valueNote,
      alertBool,
      leftChar,
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
          onChangeNote={this.onChangeNote}
          alertBool={this.state.alertBool}
          textSave="Save"
          textCounter={this.state.leftChar}
          valueNote={this.state.valueNote}
        />
        <Header textHeader="About Us" />
      </div>
    );
  }
}

export default App;
