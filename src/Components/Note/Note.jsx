import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

const Note = props => (
  <textarea
    onChange={event => props.onChangeNote(event)}
    value={props.valueNote}
    className={props.alertBool ? 'Red' : 'Original'}
  />
);

Note.propTypes = {
  onChangeNote: PropTypes.func.isRequired,
  valueNote: PropTypes.string.isRequired,
  alertBool: PropTypes.bool.isRequired,
};

export default Note;
