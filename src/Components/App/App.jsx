import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import NoteDeck from '../NoteDeck/NoteDeck';
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
      page: false,
      edit: false,
      noteId: 0,
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

  onFooterClick=() => {
    this.setState({
      page: !(this.state.page),
      noteTitle: '',
      noteContent: '',
      edit: false,
    });
  }

  onChangeNoteTitle = (event) => {
    const newvalueNoteTitle = event.target.value;
    // const history = this.state.history.slice();
    this.setState({
      noteTitle: newvalueNoteTitle,
    });
  }

  onClickEdit=(key) => {
    this.setState({
      noteId: key,
      edit: true,
      page: !this.state.page,
    });
    const history = this.state.history.slice();
    history.map((step) => {
      let noteContent = '';
      let noteTitle = '';
      if (key === step.noteid) {
        noteContent = step.valueNote;
        noteTitle = step.valueNoteTitle;
      }
      this.setState({
        noteContent,
        noteTitle,
      });
      return true;
    });
  }


  onSaveEvent = () => {
    if (this.state.edit === false) {
      const { noteTitle } = this.state;
      const { noteContent } = this.state;
      const noteid = Date.now();
      const history = this.state.history.slice();

      this.setState({
        history: history.concat([
          {
            valueNote: noteContent,
            valueNoteTitle: noteTitle,
            noteid,
          }]),
        page: !(this.state.page),
      });
    } else if (this.state.edit === true) {
      const history = this.state.history.slice();
      const noteIdRe = this.state.noteId;
      history.map((step, index) => {
        if (step.noteid === noteIdRe) {
          history[index].valueNote = this.state.noteContent;
          history[index].valueNoteTitle = this.state.noteTitle;
          this.setState({
            history: history.slice(),
            page: !(this.state.page),
          });
        }
        return true;
      });
    }
  }


  render() {
    // const history = this.state.history.slice();
    const noteList = this.state.history.map((step, index) => (
      <li>
        <NoteDeck
          noteDeckT={this.state.history[index].valueNoteTitle}
          noteDeckN={this.state.history[index].valueNote}
          indexSent={this.state.history[index].noteid}
          onClickEdit={i => this.onClickEdit(i)}
        />
      </li>
    ));

    if (this.state.page === false) {
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
          <Footer textFooter="View Saved Notes" onFooterClick={() => this.onFooterClick()} />
        </div>
      );
    }
    return (
      <div className="App">
        <Header textHeader="Saved Notes" />
        <ol className="Body2">{noteList}</ol>
        <Footer textFooter="Create new note" onFooterClick={() => this.onFooterClick()} />
      </div>
    );
  }
}

export default App;
