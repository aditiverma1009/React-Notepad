import React from 'react';
import './Note-Deck.css';
import PropTypes from 'prop-types';

const NoteDeck = props => (
  <div
    className="NoteDeck"
    index={props.indexSent}
    onClick={() => {
    props.onClickEdit(props.indexSent);
  }}
  >
    <textarea className="NoteDeckTitle">{props.noteDeckT}</textarea>
    <textarea className="NoteDeckNote">{props.noteDeckN}</textarea>
  </div>
);

NoteDeck.propTypes = {
  indexSent: PropTypes.number.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  noteDeckT: PropTypes.string.isRequired,
  noteDeckN: PropTypes.string.isRequired,
};

export default NoteDeck;
