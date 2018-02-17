import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        {this.props.textHeader}
      </div>
    );
  }
}
Header.propTypes = {
  textHeader: PropTypes.string.isRequired,
};
export default Header;

