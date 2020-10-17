import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Splashscreen from './Splashscreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Splashscreen />
      </header>
    </div>
  );
}

export default App;
