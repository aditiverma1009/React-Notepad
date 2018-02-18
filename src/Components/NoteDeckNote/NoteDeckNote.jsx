import React from 'react';
import './Note-Deck-Note.css';
import PropTypes from 'prop-types';

class NoteDeckNote extends React.Component {
  render() {
    return (
      <input className="NoteDeckNote" value={this.props.noteDeckNote} />
    );
  }
}

NoteDeckNote.propTypes = {
  noteDeckNote: PropTypes.string.isRequired,
};

export default NoteDeckNote;
