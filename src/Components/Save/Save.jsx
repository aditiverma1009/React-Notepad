import PropTypes from 'prop-types';
import React from 'react';
import './Save.css';

class Save extends React.Component {
  render() {
    return (
      <button className="Save">
        {this.props.textSave}
      </button>
    );
  }
}

export default Save;

Save.propTypes = {
  textSave: PropTypes.string.isRequired,
};
