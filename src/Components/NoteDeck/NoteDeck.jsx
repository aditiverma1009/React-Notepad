import React from 'react';
import './Note-Deck.css';
import NoteDeckTitle from '../NoteDeckTitle/NoteDeckTitle';
import NoteDeckNote from '../NoteDeckNote/NoteDeckNote';
import PropTypes from 'prop-types';

class NoteDeck extends React.Component {
  render() {
    return (
      <div className="NoteDeck">
        <NoteDeckTitle noteDeckTitle={this.props.noteDeckTitle} />
        <NoteDeckNote noteDeckNote={this.props.noteDeckNote} />
      </div>
    );
  }
}

NoteDeck.propTypes = {
  noteDeckTitle: PropTypes.string.isRequired,
  noteDeckNote: PropTypes.string.isRequired,
};

export default NoteDeck;
