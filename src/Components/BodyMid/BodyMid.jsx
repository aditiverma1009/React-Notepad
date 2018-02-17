import PropTypes from 'prop-types';
import React from 'react';
import NoteTitle from '../NoteTitle/NoteTitle';
import NoteHeading from '../NoteHeading/NoteHeading';
import Note from '../Note/Note';
import './Body-Mid.css';

class BodyMid extends React.Component {
  render() {
    return (
      <div className="BodyMid">
        <NoteTitle />
        <NoteHeading textNoteHeading={this.props.textNoteHeading} />
        <Note
          onChangeNote={event => this.props.onChangeNote(event)}
          valueNote={this.props.valueNote}
          alertBool={this.props.alertBool}
        />
      </div>
    );
  }
}

BodyMid.propTypes = {
  textNoteHeading: PropTypes.string.isRequired,
  onChangeNote: PropTypes.func.isRequired,
  valueNote: PropTypes.string.isRequired,
  alertBool: PropTypes.bool.isRequired,
};


export default BodyMid;
