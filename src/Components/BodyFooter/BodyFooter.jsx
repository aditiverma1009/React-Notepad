import PropTypes from 'prop-types';
import React from 'react';
import Save from '../Save/Save';
import Counter from '../Counter/Counter';
import './Body-Footer.css';

class BodyFooter extends React.Component {
  render() {
    return (
      <div className="BodyFooter">
        <Save textSave={this.props.textSave} onSaveEvent={() => this.props.onSaveEvent()} />
        <Counter textCounter={this.props.textCounter} />
      </div>
    );
  }
}

BodyFooter.propTypes = {
  textSave: PropTypes.string.isRequired,
  textCounter: PropTypes.number.isRequired,
  onSaveEvent: PropTypes.func.isRequired,
};

export default BodyFooter;
