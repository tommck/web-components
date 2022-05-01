import React from 'react';
import './App.css';

// import './vanilla-char-count';
import './lit-char-count';

function App() {
  const elementProps = {
    'label': "Chars To Count"
  };

  return (
    <div className="App">
      <h1>Web Component Comparisons</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate officia possimus minima tempore architecto quae accusamus modi. Placeat ipsum fugiat quae eaque magnam. Minima veniam aut, a impedit animi necessitatibus!</p>


      <h2>LitElement</h2>
      <lit-char-count {...elementProps}></lit-char-count>

    </div>
  );
}

export default App;
