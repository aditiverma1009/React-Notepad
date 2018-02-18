import React from 'react';
import './Note-Title.css';
import PropTypes from 'prop-types';

class NoteTitle extends React.Component {
  render() {
    return (
      <input
        className="NoteTitle"
        onChange={event => this.props.onChangeNoteTitle(event)}
        value={this.props.valueNoteTitle}
      />
    );
  }
}

NoteTitle.propTypes = {
  onChangeNoteTitle: PropTypes.func.isRequired,
  valueNoteTitle: PropTypes.string.isRequired,
};

export default NoteTitle;
