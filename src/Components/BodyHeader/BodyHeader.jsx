import PropTypes from 'prop-types';
import React from 'react';
import NoteTitleHeading from '../NoteTitleHeading/NoteTitleHeading';
import ButtonEn from '../ButtonEn/ButtonEn';
import './Body-Header.css';

class BodyHeader extends React.Component {
  render() {
    return (
      <div className="BodyHeader">
        <NoteTitleHeading textNoteTitleHeading={this.props.textNoteTitleHeading} />
        <ButtonEn textButtonEn={this.props.textButtonEn} />
      </div>
    );
  }
}

export default BodyHeader;
BodyHeader.propTypes = {
  textNoteTitleHeading: PropTypes.string.isRequired,
  textButtonEn: PropTypes.string.isRequired,
};
