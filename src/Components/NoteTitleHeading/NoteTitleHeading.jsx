import PropTypes from 'prop-types';
import React from 'react';
import './Note-Title-Heading.css';

class NoteTitleHeading extends React.Component {
  render() {
    return (
      <div className="NoteTitleHeading">
        {this.props.textNoteTitleHeading}
      </div>
    );
  }
}

NoteTitleHeading.propTypes = {
  textNoteTitleHeading: PropTypes.string.isRequired,
};
export default NoteTitleHeading;
