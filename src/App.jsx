import React from 'react';
import './App.scss';
import Checkout from './components/Checkout/Checkout';
import Shipping from './components/Shipping/Shipping';
 
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
        </div>
      </main>
    </div>
  );
}

export default App;
