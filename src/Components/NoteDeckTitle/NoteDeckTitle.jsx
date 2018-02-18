import React from 'react';
import './Note-Deck-Title.css';
import PropTypes from 'prop-types';

class NoteDeckTitle extends React.Component {
  render() {
    return (
      <input className="NoteDeckTitle" value={this.props.noteDeckTitle} />
    );
  }
}

NoteDeckTitle.propTypes = {
  noteDeckTitle: PropTypes.string.isRequired,
};

export default NoteDeckTitle;
