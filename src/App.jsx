import React from 'react';
import './App.scss';
import Checkout from './components/Checkout/Checkout';
 
const App = (props) => {
  return (
    <div className="App">
      <header className="Header">
        <h6>Company name</h6>
      </header>
      <main className="Main">  
        <Checkout/>
      </main>
    </div>
  );
}

export default App;
