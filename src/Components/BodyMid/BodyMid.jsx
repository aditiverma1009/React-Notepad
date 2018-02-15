import React from 'react';
import NoteTitle from '../NoteTitle/NoteTitle';
import NoteHeading from '../NoteHeading/NoteHeading';
import Note from '../Note/Note';
import './Body-Mid.css';

const BodyMid = () => (
  <div className="BodyMid">
    <NoteTitle />
    <NoteHeading />
    <Note />
  </div>
);

export default BodyMid;
