import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { useState } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  function handleAddToCart(sneaker) {
    setCart([...cart, sneaker]);
    setTotal(total + Number(sneaker.price));
  }

  return (
    <div className="App">
        
      
        
        <p>Hello World</p>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={ <Cart /> } />
     
          {/* <ExclusiveForm />           */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
