import React from 'react';
import logo from './logo.svg';
import './App.css';

import './vanilla-char-count';
import './fast-char-count';

function App() {
  const elementProps = {
    'label': "Chars To Count"
  };

  return (
    <div className="App">
      <h1>Web Component Comparisons</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate officia possimus minima tempore architecto quae accusamus modi. Placeat ipsum fugiat quae eaque magnam. Minima veniam aut, a impedit animi necessitatibus!</p>

      <h2>Vanilla</h2>
      <vanilla-char-count {...elementProps}></vanilla-char-count>

      <h2>FASTElement</h2>
      <fast-char-count {...elementProps}></fast-char-count>
    </div>
  );
}

export default App;
