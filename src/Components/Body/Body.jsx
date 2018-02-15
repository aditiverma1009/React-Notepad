import React from 'react';
import BodyHeader from '../BodyHeader/BodyHeader';
import BodyMid from '../BodyMid/BodyMid';
import BodyFooter from '../BodyFooter/BodyFooter';
import './Body.css';


const Body = () => (
  <div className="Body">
    <BodyHeader />
    <BodyMid />
    <BodyFooter />
  </div>
);

export default Body;
