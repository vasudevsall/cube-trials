import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const colorNames = ['red', 'blue', 'red', 'green', 'white', 'red', 'yellow', 'green', 'orange'];

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
