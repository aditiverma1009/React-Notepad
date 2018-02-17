import PropTypes from 'prop-types';
import React from 'react';
import './Note-Heading.css';

class NoteHeading extends React.Component {
  render() {
    return (
      <div className="NoteHeading">
        {this.props.textNoteHeading}
      </div>
    );
  }
}

NoteHeading.propTypes = {
  textNoteHeading: PropTypes.string.isRequired,
};

export default NoteHeading;
