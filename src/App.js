import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import CheckOut from './components/pages/CheckOut';
import ExclusiveForm from './components/pages/ExclusiveForm';

function App() {
  return (
    <div className="App">
      <Home />
      <Cart />
      <CheckOut />
      <ExclusiveForm />
      <p>Hello World</p>
    </div>
  );
}

export default App;
