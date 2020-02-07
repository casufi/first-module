import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from "./components/First"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Test component</h1>
      </header>
      <First/>
    </div>
  );
}

export default App;
