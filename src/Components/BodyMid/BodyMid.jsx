import PropTypes from 'prop-types';
import React from 'react';
import NoteTitle from '../NoteTitle/NoteTitle';
import NoteHeading from '../NoteHeading/NoteHeading';
import Note from '../Note/Note';
import './Body-Mid.css';

const BodyMid = props => (
  <div className="BodyMid">
    <NoteTitle
      onChangeNoteTitle={event => props.onChangeNoteTitle(event)}
      valueNoteTitle={props.valueNoteTitle}
    />
    <NoteHeading textNoteHeading={props.textNoteHeading} />
    <Note
      onChangeNote={event => props.onChangeNote(event)}
      valueNote={props.valueNote}
      alertBool={props.alertBool}
    />
  </div>
);


BodyMid.propTypes = {
  textNoteHeading: PropTypes.string.isRequired,
  onChangeNoteTitle: PropTypes.func.isRequired,
  valueNoteTitle: PropTypes.string.isRequired,
  onChangeNote: PropTypes.func.isRequired,
  valueNote: PropTypes.string.isRequired,
  alertBool: PropTypes.bool.isRequired,
};


export default BodyMid;
