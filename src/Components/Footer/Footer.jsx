import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer" onClick={() => this.props.onFooterClick()}>
        {this.props.textFooter}
      </div>
    );
  }
}
Footer.propTypes = {
  onFooterClick: PropTypes.func.isRequired,
  textFooter: PropTypes.string.isRequired,
};
export default Footer;

