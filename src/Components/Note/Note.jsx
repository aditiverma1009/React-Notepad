import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

class Note extends React.Component {
  render() {
    return (
      <textarea
        onChange={event => this.props.onChangeNote(event)}
        value={this.props.valueNote}
        className={this.props.alertBool ? 'Red' : 'Original'}
      />
    );
  }
}

Note.propTypes = {
  onChangeNote: PropTypes.func.isRequired,
  valueNote: PropTypes.string.isRequired,
  alertBool: PropTypes.bool.isRequired,
};

export default Note;
