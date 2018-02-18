import PropTypes from 'prop-types';
import React from 'react';
import './Save.css';

class Save extends React.Component {
  render() {
    return (
      <button className="Save" onClick={() => this.props.onSaveEvent()}>
        {this.props.textSave}
      </button>
    );
  }
}

export default Save;

Save.propTypes = {
  textSave: PropTypes.string.isRequired,
  onSaveEvent: PropTypes.func.isRequired,
};
