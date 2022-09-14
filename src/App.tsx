import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Paul } from './Paul';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in your favorite browser!
        </a>
        <Paul greeting='Good Night'/>
      </header>
    </div>
  );
}

export default App;
