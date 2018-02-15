import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <div className="Header">
    {props.text}
  </div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Header;

