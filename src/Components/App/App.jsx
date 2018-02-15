import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import './App.css';

const App = () => (
  <div className="App">
    <Header text="Start Taking Notes" />
    <Body />
    <Header text="About Us" />
  </div>
);

export default App;
