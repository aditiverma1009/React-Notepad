import PropTypes from 'prop-types';
import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        {this.props.textCounter} character
      </div>
    );
  }
}


Counter.propTypes = {
  textCounter: PropTypes.number.isRequired,
};

export default Counter;
