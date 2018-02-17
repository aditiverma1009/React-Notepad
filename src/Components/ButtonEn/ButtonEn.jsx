import PropTypes from 'prop-types';
import React from 'react';
import './Button-En.css';

class ButtonEn extends React.Component {
  render() {
    return (
      <button className="ButtonEn">{this.props.textButtonEn}</button>
    );
  }
}

ButtonEn.propTypes = {
  textButtonEn: PropTypes.string.isRequired,
};

export default ButtonEn;
