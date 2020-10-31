import React from 'react';
import './App.css';
import Routes from "./Routes";
import Navbar from './Navbar';
import Splashscreen from './Splashscreen';
import { useStateValue } from "./StateProvider";

function App() {
  
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? ( <Splashscreen /> ) : (
        <>
          <Navbar />
          <Routes />
        </>
      )}
    </div>
  );
}

export default App;
