import React from 'react';
import './App.scss';
import Checkout from './components/Checkout/Checkout';
import Shipping from './components/Shipping/Shipping';
import NextButton from './components/NextButton/NextButton';
 
const App = (props) => {
  return (
    <div className="App">
      <header className="Header">
        <h1>Company name</h1>
      </header>
      <main className="Main">  
        <div className="Wrapper">
          <Checkout/>
          <Shipping/>
          <NextButton/>
        </div>
      </main>
    </div>
  );
}

export default App;
